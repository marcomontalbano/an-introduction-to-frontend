module.exports = function(grunt)
{

    grunt.initConfig({
        less: {
            development: {
                files: {
                    'public/application.css': 'src/stylesheets/application.less'
                }
            }
        },
        uglify: {
            development: {
                files: {
                    'public/application.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                        'src/javascripts/application.js',
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['src/**/*.less'],
                tasks: ['less'],
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['uglify'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['less', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);

};
