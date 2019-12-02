module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                reporter: 'spec'
            },
            all: { src: ['tests/**/*.js'] }
        }
    });

    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.registerTask('default', ['simplemocha']);
};