'use strict';

module.exports = function(grunt) {

    // Project Configuration
    require('time-grunt')(grunt);

    var project = grunt.option("project") || 'wimbledon-parking';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['public/views/**', 'app/views/**'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            app: {
                options: { // Target options
                    sourcemap: true
                },
                files: { // Dictionary of files
                    'public/css/style-app.css': 'C:/proj/windscreen/windscreen-static-content/src/main/webapp/css/style.scss' // 'destination': 'source'
                }
            },
            common: {
                options: { // Target options
                    sourcemap: true
                },
                files: { // Dictionary of files
                    'public/css/style-common.css': 'C:/proj/common-static-content/src/main/webapp/css/common/style.scss' // 'destination': 'source'
                }
            }
        },
        jshint: {
            all: {
                src: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js', '!test/coverage/**/*.js'],
                options: {
                    jshintrc: true
                }
            }
        },
        concat: {
            appJS: {
                // The line below was public/js/**/*.js but this then meant that it was compiling itself and the previously compiled files!!
                // TODO: So need to think of a way around this
                src: ['public/js/app.js'],
                dest: "public/js/app-all.js"
            },
            commonJS: {
                src: ['public/lib/angular/**/*.js'],
                dest: 'public/js/common-all.js'
            }
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js'
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-karma');
    //NL - had trouble with ENV so commented this out until I work out why
    //grunt.loadNpmTasks('env');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    grunt.registerTask('default', ['build-all']);
    grunt.registerTask('build-all', ['concat:commonJS', 'concat:appJS', 'sass:app', 'sass:common']);
    grunt.registerTask('build-common', ['sass:common', 'concat:common']);
    grunt.registerTask('build-app', ['sass:app', 'concat:app']);
    
    //Test task.
    //NL - had trouble with ENV so commented this out until I work out why
    //grunt.registerTask('test', ['env:test', 'karma:unit']);
    grunt.registerTask('test', ['karma:unit']);
  
};