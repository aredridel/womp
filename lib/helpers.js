"use strict";

console.log("registering");

module.exports = function(dust) {

    dust.helpers.hello = function (chunk, ctx, bodies, params) {
        return chunk.map(function (c) {
            c.end("hello");
        });
    };
};
module.exports.registerWith = module.exports;
