// Carrega as tasks do gulp backstopjs
var fs = require('fs');
var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var debug = require('gulp-debug');
var argv = require('yargs').argv;

gulp.task('less', function() {
  //Arquivos LESS a serem compilados para css
  var lessFiles = ['main.less'];
  var lessFolder = 'public/less/';

  for (var i = 0; i < lessFiles.length; i++) {
    var src = lessFolder + lessFiles[i];

    if (!argv.watch) {
      return gulp.src(src)
      .pipe(less())
      .pipe(gulp.dest('public/css/'))
      .on('error', gutil.log);
    } else {
      gulp.watch(lessFolder + '/**/*.less', function(data) {
        return gulp.src(src)
        .pipe(debug({title: 'File changed: ' + data.path}))
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('public/css/'))
        .on('error', gutil.log);
      });
    }
  }
});
