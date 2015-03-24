var fs         = require('fs');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var jshint     = require('gulp-jshint');
var uglify     = require('gulp-uglify');
var rjs        = require("gulp-requirejs");
var htmlminify = require("gulp-minify-html");
var stripDebug = require('gulp-strip-debug');
var replace    = require('gulp-replace');
var bootFiles  = ["boot","boot.login"];

var less      = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

//Arquivos LESS a serem compilados para css
lessFiles = ['main'];

gulp.task('less', function(){
  for (var i = 0; i < lessFiles.length; i++) {
    gulp
    .src(['../public/less/'+lessFiles[i]+'.less'])
    .pipe(less())
    .pipe(gulp.dest('../public/css/'))
    .on('error', gutil.log);
  };
});
