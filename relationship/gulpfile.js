const fs = require('fs');
const gulp = require('gulp');
const rename = require("gulp-rename");
const cht = require('gulp-cht');

gulp.task('mini', () => {
    // gulp.src('./index.html')
    // .pipe(cht())
    // .pipe(rename("zh-HK.html"))
    // .pipe(gulp.dest("./"));

    return gulp.src('dist/relationship.min.js')
    .pipe(cht())
    .pipe(rename("relationship.zh-HK.min.js"))
    .pipe(gulp.dest('dist/'))
});
