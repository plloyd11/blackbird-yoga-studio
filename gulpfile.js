/*jshint esversion: 6 */
/* jshint node: true */

'use strict';

// FIXME Add image asset pipeline

const browserify = require('browserify');
const bs = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const copy = require('gulp-copy');
const gulp = require('gulp');
const gutil = require('gulp-util');
const metalsmith = require('./bin/metalsmith');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');

gulp.task('css', () => {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass({
      sourceMapEmbed: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('javascript', () => {
  return browserify('./src/js/main.js', { debug: true })
    .transform('babelify', { presets: ['es2015'] })
    .transform('uglifyify')
    .bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./src/js'));
});

gulp.task('build', (done) => {
  metalsmith((err, success) => {
    if (err) {
      return gutil.log(err);
    } else {
      bs.reload();
      done();
    }
  });
});

gulp.task('default', ['build'], () => {
  bs.init({
    server: { baseDir: './build' },
    notify: false,
    ghostMode: true,
    serveStatic: ['./build'],
    serveStaticOptions: { extensions: ['html'] }
  });
  gulp.watch(['src/sass/**/*'], ['css']);
  gulp.watch(['src/js/main.js', 'src/js/lib/**/*.js'], ['javascript']);
  gulp.watch([
    'src/css/**/*',
    'src/html/**/*',
    'src/img/**/*',
    'src/js/vendor/**/*',
    'src/js/main.min.js',
  ], ['build']);
});
