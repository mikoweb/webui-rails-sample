module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        path: {
            public: 'public/',
            private: 'private/',
            jsFolder: 'js/'
        },
        exec: {
            js: 'cd <%= path.private %>src && npm install && grunt'
        },
        clean: {
            js: ['<%= path.public %><%= path.jsFolder %>']
        },
        uglify: {
            js: {
                expand: true,
                cwd: '<%= path.private %><%= path.jsFolder %>',
                src: ['**/*.js', '!**/*.min.js'],
                dest: '<%= path.public %><%= path.jsFolder %>',
                ext: '.js'
            }
        },
        symlink: {
            js: {
                src: '<%= path.private %><%= path.jsFolder %>',
                dest: '<%= path.public %><%= path.jsFolder %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('js-prod', [
        'exec:js',
        'clean:js',
        'uglify:js'
    ]);

    grunt.registerTask('js-dev', [
        'clean:js',
        'symlink:js'
    ]);
};
