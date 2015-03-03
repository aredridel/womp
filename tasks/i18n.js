'use strict';


module.exports = function clean(grunt) {
    // Load task
    grunt.registerTask('i18n', [ 'clean', 'dustjs', 'clean:tmp' ]);

    // Options
    return {};
};
