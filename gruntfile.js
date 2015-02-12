module.exports = function(grunt) {

  grunt.initConfig({
    typescript: {
      base: {
        src: ['app/**/*.ts'],
        dest: '',
        options: {
          module: 'amd', 
          target: 'es5',
          sourceMap: true,
          noImplicitAny: true,
          references: [
          ]
        }
      }
    },
    uglify: {
      app: {
        files: {
          'app/app.min.js': ['app/**/*.js']
        }
      }
    },
    clean: {
      js: ["app/**/*.js"]
    },
    watch: {
      files: ['<%= typescript.base.src %>'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean', 'typescript', 'uglify']);
};