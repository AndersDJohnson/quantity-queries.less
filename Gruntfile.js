module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    less: {
      test: {
        files: [
          {
            expand: true,
            cwd: 'test',
            src: '**/*.less',
            dest: '.',
            ext: '.css'
          }
        ]
      }
    }

  });

};
