/*jslint node: true */
'use strict';

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json'),
      config = {
        modulename: (process.env.npm_package_config_distname || pkg.config.distname || pkg.name).replace(/[^a-z0-9_\-]/ig, '_')
      };

  config.distname = config.modulename.toLowerCase();

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: pkg,
    config: config,
    banner: '/*! <%= config.modulename %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n\n' +
      '<%= pkg.name %>\n' + (new Array(pkg.name.length + 1).join('=')) + '\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      dist: {
        src: ['dist/<%= config.distname %>.js'],
        dest: 'dist/<%= config.distname %>.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= config.distname %>.min.js'
      },
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    jshint: {
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['src/**/*.js']
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            '*.{md}'
          ]
        }]
      },
      main: {
        files: [{
          src: ['dist/<%= config.distname %>.js'],
          dest: './<%= config.distname %>.js'
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          name: 'main',
          mainConfigFile: 'src/main.js',
          out: 'dist/<%= config.distname %>.js',
          optimize: 'none'
          // generateSourceMaps: true,
        }
      }
    },
    connect: {
      test: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              connect.static(require('path').resolve('test')),
              connect.static(require('path').resolve('src'))
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy:dist',
    'requirejs',
    'concat',
    'uglify',
    'copy:main'
  ]);

  // Default task.
  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};