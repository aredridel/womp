'use strict';


var kraken = require('kraken-js'),
    app = require('express')(),
    options = {
        onconfig: function (config, next) {
            //any config setup/overrides here
            next(null, config);
        }
    },
    port = process.env.PORT || 8000;


app.use(kraken(options));

var spud = require('spud');
var fs = require('fs');
var path = require('path');
var dust = require('dustjs-linkedin');
var root = path.resolve(__dirname, 'locales/US/en/');
require('dust-usecontent-helper').withLoader(function(bundle, cb) {
    fs.readFile(path.resolve(root, bundle), 'utf-8', function(err, data) {
        if (err) {
            return cb(err);
        } else {
            cb(null, spud.parse(data));
        }
    });
}).registerWith(dust);

require('dust-message-helper').registerWith(dust);

module.exports = app;

if (!module.parent) {
    app.listen(port, function (err) {
        console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
    });
}
