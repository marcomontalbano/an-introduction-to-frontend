var sass = require('sass');

module.exports = function(grunt)
{

    grunt.initConfig({
        sass: {
            development: {
                options: {
                    implementation: sass,
                    compress: true,
                    sourceMap: true
                },
                files: {
                    'public/application.min.css': 'src/stylesheets/application.scss'
                }
            }
        },
        uglify: {
            development: {
                files: {
                    'public/application.min.js': [
                        'node_modules/handlebars/dist/handlebars.min.js',
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/bootstrap/dist/js/bootstrap.js',
                        'src/javascripts/application.js',
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass'],
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['uglify'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);

};
