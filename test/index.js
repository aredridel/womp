/*global describe:false, it:false, before:false */ 
'use strict';


var request = require('supertest');


describe('/', function () {

    var app = require('../');

    before(function (done) {
        app.on('start', done);
    });

    it('should say "hello"', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/Hello, /)
            .end(function (err, res) {
                done(err);
            });
    });

});
