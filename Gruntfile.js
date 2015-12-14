// Gruntfile.js
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less : {
            dist : {
                options : {
                    banner : "",
                    compress : false,
                    cleancss : true,
                    customFunctions : require("./src/customFunctions")
                },
                files: {
                    "dist/control-panel.css": "src/control-panel.less"
                }
            }
        },

        fileblocks : {
            options: {
                removeFiles : true,
                templates: {
                    less: "@import '${file}';"
                }
            },
            lessImports : {
                src: "./src/control-panel.less",
                blocks: {
                    "includes" :    { cwd: "./src/", src: ["includes/**/*.less"] },
                    "utilities" :   { cwd: "./src/", src: ["utilities/**/*.less"] },
                    "base" :        { cwd: "./src/", src: ["base/**/*.less"] },
                    "components" :  { cwd: "./src/", src: ["components/**/*.less"] }
                }
            }
        }
    });

    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-file-blocks');

    // Register the default tasks.
    grunt.registerTask('default', [
        "fileblocks:lessImports",
        "less:dist"
    ]);
};
