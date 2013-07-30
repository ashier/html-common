module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      dev: {
        options: {
          paths: ["css"],
          yuicompress: false
        },
        files: {
          "css/default.css": "less/default.less",
          "examples/login/login.css": "examples-less/login.less"
        }
      }
    }

  });

  // load
  grunt.loadNpmTasks('grunt-contrib-less');

  // Tasks
  grunt.registerTask('default', ['less']);

};
