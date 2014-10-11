var gulp = require('gulp'),
    karma = require('karma').server,
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    transform = require('vinyl-transform'),
    projectName = require('./package.json').name
    sourceFile = ['./src/index.js'];

var browserified = function(standalone) {
  return transform(function(filename) {
    var b = browserify();
    if (standalone) {
      b.add(filename, {standalone: projectName});
    } else {
      b.require(filename, {expose: projectName});
    }
    return b.bundle();
  });
}


gulp.task('build-browserify', function() {
  gulp.src(sourceFile)
    .pipe(browserified())
    .pipe(rename(projectName + '.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename(projectName + '.min.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('build-standalone', function() {
  gulp.src(sourceFile)
    .pipe(browserified(true))
    .pipe(rename(projectName + '-standalone.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename(projectName + '-standalone.min.js'))
    .pipe(gulp.dest('./dist'))
});



/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: true
  }, done);
});

gulp.task('test-debug', function (done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: false,
    autoWatch: true
  }, done);
});

gulp.task('build', ['build-browserify', 'build-standalone']);
gulp.task('default', ['test', 'build']);
