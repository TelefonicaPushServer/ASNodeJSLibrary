/**
 * Application Server Push Library for the Push Notification server
 * (c) Telefonica Digital, 2013 - All rights reserved
 * License: GNU Affero V3 (see LICENSE file)
 * Fernando Rodríguez Sela <frsela@tid.es>
 */

var crypto = require('crypto');

function push_client() {
  this.msgLastId = 1;
}

push_client.prototype = {
  signMessage: function signMessage(data,privateKey) {
    var algorithm = 'RSA-SHA256';
    var signer = crypto.createSign(algorithm);
    signer.update(data);
    return signer.sign(privateKey, 'hex');
  },

  pushMessage: function(msg, privateKey, pushserver) {
    var notif = JSON.stringify({
      messageType: 'notification',
      id: this.msgLastId++,
      message: msg,
      signature: this.signMessage(msg, privateKey),
      ttl: 1,
      timestamp: "'" + Date.now() + "'",
      priority: 2
    });

    var options = {
      host: pushserver.host,
      port: pushserver.port,
      path: pushserver.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    };

    var http = null;
    if(pushserver.ssl) {
      http = require('https');
    } else {
      http = require('http');
    }

    var req = http.request(options, function(res) {
      console.log('Message status: ' + res.statusCode);
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    req.write(notif);
    req.end();

    console.log(notif.length + " - " + JSON.stringify(notif));
  }
};

/////////////////////////////////////////////////////////////////////////////

var push = new push_client();
function getPush() {
  return push;
}
module.exports = getPush();
