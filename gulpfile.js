'use strict';

var gulp = require('gulp');
var schoolcoreTasks = require('schoolcore-build');

schoolcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
