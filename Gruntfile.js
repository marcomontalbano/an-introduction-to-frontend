module.exports = function(grunt)
{

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    'public/application.min.css': 'src/stylesheets/application.less'
                }
            }
        },
        uglify: {
            development: {
                files: {
                    'public/application.min.js': [
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/bootstrap/dist/js/bootstrap.js',
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
