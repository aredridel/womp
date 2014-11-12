'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    return {
        browserify: {
            files: {
                '.build/js/app.js': ['public/js/app.jsx']
            },
            options: {
                transform: ['reactify'],
                external: ['_languagepack']
            }
        }
    };
};

