module.exports = function(grunt)
{

    grunt.initConfig({
        less: {
            development: {
                files: {
                    'application.css': 'application.less'
                }
            }
        },
        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less']
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);

};
