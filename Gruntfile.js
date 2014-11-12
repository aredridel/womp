'use strict';


module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-makara-browserify');

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // Register group tasks
    grunt.registerTask('build', [ 'jshint', 'less', 'browserify', 'makara-browserify', 'dustjs', 'copyto' ]);
    grunt.registerTask('test', [ 'jshint', 'mochacli' ]);

};
