const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('./components.json')

function buildCss(cb) {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer()) // 自动添加前缀
    .pipe(cleanCSS()) // 压缩
    .pipe(rename('boi-activity.css'))
    .pipe(gulp.dest('../lib/styles'));
  cb();
}
/**
 * 对组件样式文件单独打包
 */
function buildSeperateCss(cb) {
  Object.keys(components).forEach(compName => {
    gulp.src(`../src/styles/${compName}.scss`)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${compName}.css`))
      .pipe(gulp.dest('../lib/styles'));
  });
  cb();
}

exports.default = gulp.series(buildCss, buildSeperateCss);