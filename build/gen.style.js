const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function buildCss(cb) {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer()) // 自动添加前缀
    .pipe(cleanCSS()) // 压缩
    .pipe(rename('boi-activity.css'))
    .pipe(gulp.dest('../lib/styles'));
  cb();
}

exports.default = gulp.series(buildCss);