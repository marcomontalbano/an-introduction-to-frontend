'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: 'live-action/**/**/*.css',
                options: {
                    livereload: {
                        host: 'localhost',
                        port: 8080,
                    }
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
