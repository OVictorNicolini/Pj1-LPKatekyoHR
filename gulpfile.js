const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js') // Retorna a stream
        .pipe(uglify()) // Minifica os arquivos JavaScript
        .pipe(gulp.dest('./dist/js')); // Salva os arquivos minificados na pasta dist/js
}   

function styles() {
    return gulp.src('./src/styles/*.scss') // Retorna a stream
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*') // Retorna a stream
        .pipe(imagemin()) // Minifica as imagens
        .pipe(gulp.dest('./dist/images'));    // Salva as imagens minificadas na pasta dist/images
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Corrige a chamada da tarefa
    gulp.watch('./src/scripts/*.js',  gulp.parallel(scripts)); // Corrige a chamada da tarefa
};