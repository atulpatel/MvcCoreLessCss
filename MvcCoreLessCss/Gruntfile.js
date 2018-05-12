module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['wwwroot/css'],
                    modifyVars: {
                        //imgPath: '"http://mycdn.com/path/to/images"',
                        'brand-primary': 'green'
                    }
                },
                files: {
                    'wwwroot/css/site.debug.css': 'wwwroot/less/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                    relativeUrls: true,
                    paths: ['assets/css'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] })
                    ],
                    modifyVars: {
                        //imgPath: '"http://mycdn.com/path/to/images"',
                        'brand-primary': 'black'
                    }
                },
                files: {
                    'wwwroot/css/site_.css': 'wwwroot/less/main.less'
                }
            },
            tenant1: {
                options: {
                    compress: true,
                    relativeUrls: true,
                    paths: ['assets/css'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] })
                        // new (require('less-plugin-clean-css'))(cleanCssOptions)
                    ],
                    modifyVars: {
                        //imgPath: '"http://mycdn.com/path/to/images"',
                        'brand-primary': 'darkblue'
                    }
                },
                files: {
                    'wwwroot/css/site_tenant1.css': 'wwwroot/less/main.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less'])
};