/**
 * PUSH Notification server - AS Library sample
 * (c) Telefonica Digital, 2012 - All rights reserved
 * License: GNU Affero V3 (see LICENSE file)
 * Fernando Rodríguez Sela <frsela@tid.es>
 */

var push_data = {
  privateKey: "-----BEGIN RSA PRIVATE KEY-----\n" +
        "MIICXgIBAAKBgQDFW14SniwCfJS//oKxSHin/uC1P6IBHiIvYr2MmhBRcRy0juNJ\n" +
        "H8OVgviFKEV3ihHiTLUSj94mgflj9RxzQ/0XR8tzPywKHxSGw4Amf7jKF1ZshCUd\n" +
        "yrOi8cLfzdwIz1nPvDF4wwbi2fqseX5Y7YlYxfpFlx8GvbnYJHO/50QGkQIDAQAB\n" +
        "AoGBAIXi0hL3Uwvs0EzfsHHspE3zzyWmoZT4iGB1L/oumltlzP+A4Bg/gEPxsf9D\n" +
        "rrzF4hQPzddl2mNtUW7KXh6kRRFPq182djTLXtwweLnC/vZ4Bh870wy3fGOMJ5Ii\n" +
        "04kpfWQ1xruKGobn+RMiA38zzM03tVaVP+ylduPauFxnl+UxAkEA98Ea0jL5g5jf\n" +
        "nwpTzZN0xclpQf5yQr+rTtR8qQJSBBblmmoY42eUQRxvmkCGW7TcWlOfZhxNTKOy\n" +
        "LLKzW1B6twJBAMvs3ve7b4kymR6siLgJr79uzJHCYsgXMFCewK+V0OIeDb5+hFQJ\n" +
        "brBz81YYHLyN4yPYgAkgv0LFnv3Jh6EvYPcCQQDmSAvZAt5ezhJUbjH0q7FnQc1f\n" +
        "NNUZa7Qb4m84XFrFSE8DlsgpXpYzau3kz0LTLKmAH6fSLk4/BQxQdY02O/jDAkAB\n" +
        "WoIkXM8htv9DL9v8dLwA5khfU036jATbFCKtR65KQe7Pa+GO+T0N2McttB1EtyBh\n" +
        "1YcMCHach9lFT/ghfsIDAkEA7Vk5s+S8y9dLB+taTfETFpiiJk+M4votA2zln5Gp\n" +
        "+nfoveICNUmfREbzNLkGh1zhIWIa1e4xoZkmfi//18aSXg==\n" +
        "-----END RSA PRIVATE KEY-----",

  server: {
    host: "localhost",
    port: 8081,
    path: '/notify/31387b27716acb88d336cda8858c8a10a343cb70add5288d452e7813271bc04d',
    ssl: true
  }
}

var push = require('./push_client.js');
push.pushMessage("Test", push_data.privateKey, push_data.server);
