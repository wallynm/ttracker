// Carrega as tasks do gulp backstopjs
var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');

gulp.task('less', function() {
  //Arquivos LESS a serem compilados para css
  var lessFiles = ['main.less'];

  for (var i = 0; i < lessFiles.length; i++) {
    gulp
    .src('public/less/' + lessFiles[i])
    .pipe(less())
    .pipe(gulp.dest('public/css/'))
    .on('error', gutil.log);
  }
});
