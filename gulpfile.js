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
    return gulp.src('./src/styles/*.scss') // Seleciona todos os arquivos SCSS na pasta src/styles
    .pipe(sass({ outputStyle: 'compressed' }))// Compila os arquivos SCSS 
    .pipe(gulp.dest('./dist/css')); // Salva os arquivos compilados na pasta dist/css
}

function images() {
    return gulp.src('./src/images/**/*') // Seleciona todas as imagens na pasta src/images
        .pipe(imagemin()) // Minifica as imagens
        .pipe(gulp.dest('./dist/images'));    // Salva as imagens minificadas na pasta dist/images
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Corrige a chamada da tarefa
    gulp.watch('./src/scripts/*.js',  gulp.parallel(scripts)); // Corrige a chamada da tarefa
    gulp.watch('./src/images/**/*', gulp.parallel(images)); // Corrige a chamada da tarefa
};