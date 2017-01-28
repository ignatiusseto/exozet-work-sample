module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        // grunt-contrib-sass configuration
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files : {
                    'dist/css/main.css': 'dev/scss/main.scss'
                }
            }
        },
        watch: {
            css : {
                files: '**/*.scss',
                tasks: ['sass']
            },
            js: {
                files: 'dev/js/*.js',
                tasks: ['concat']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src:['dev/**/*.js'],
                dest:'dist/js/main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat','watch']);

};