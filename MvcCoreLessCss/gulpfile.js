var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less");

gulp.task("less", function () {
    return gulp.src('wwwroot/lib/bootstrap/main.less')
        .pipe(less())
        .pipe(gulp.dest('wwwroot/css'));
});