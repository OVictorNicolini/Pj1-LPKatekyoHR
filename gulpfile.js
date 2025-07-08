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
        .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*') // Retorna a stream
        .pipe(imagemin()) // Minifica as imagens
        .pipe(gulp.dest('./dist/images'));    // Salva as imagens minificadas na pasta dist/images
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', styles); // Observa mudanças nos arquivos SCSS
    gulp.watch('./src/scripts/*.js', scripts); // Observa mudanças nos arquivos JavaScript
    gulp.watch('./src/images/**/*', images); // Observa mudanças nas imagens
};