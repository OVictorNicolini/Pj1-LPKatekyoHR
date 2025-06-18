const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') // Seleciona todos os arquivos SCSS na pasta src/styles
    .pipe(sass({ outputStyle: 'compressed' }))// Compila os arquivos SCSS 
    .pipe(gulp.dest('./dist/css')); // Salva os arquivos compilados na pasta dist/css
}


exports.default = styles; // tarefa padrão do Gulp
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Observa mudanças nos arquivos SCSS e executa a tarefa styles
}