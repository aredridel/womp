'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        
        req.app.render('index', model, function (e, s) {
            res.send(s);
        });
        
    });

};
