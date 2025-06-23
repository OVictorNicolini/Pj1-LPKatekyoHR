const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const del = require('del');

// Limpa toda a pasta dist antes do build
function clean() {
    return del(['dist/**', '!dist']);
}

// Minifica e copia scripts JS
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Compila e minifica SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Otimiza e copia imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Build padrão: limpa dist e executa todas as tasks em paralelo
exports.default = gulp.series(
    clean,
    gulp.parallel(styles, images, scripts)
);

// Watch para desenvolvimento
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
};