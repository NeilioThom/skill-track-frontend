var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/styles/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/styles/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/styles/scss/*.scss',['styles']);
});
