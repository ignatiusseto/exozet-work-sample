module.exports = function (grunt) {
    // Projektkonfiguration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dev/js/main.js',
                dest: 'dist/js/main.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dev/css/main.css': 'dev/scss/main.scss'}
            }
        },
        watch: {
            css: {
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
                src: ['dev/**/*.js'],
                dest: 'dev/js/main.js'
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'dev/css',
                        src: ['*.css'],
                        dest: 'dist/css',
                        ext: '.min.css'
                    }
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // DEV
    grunt.registerTask('default', ['watch']);
    // PROD
    grunt.registerTask('prod', ['concat', 'cssmin', 'uglify']);
};