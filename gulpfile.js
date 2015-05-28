var gulp = require('gulp'),
browserify = require('gulp-browserify'),
jshint = require("gulp-jshint");

gulp.task('lint', function() {
  return gulp.src('./client_lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jsx', function() {
	gulp.src(['./client_lib/*.js'])
		.pipe(browserify({
			debug: true,
			transform: [ 'reactify']
		}))
		.pipe(gulp.dest('./public/javascripts'));
});


 gulp.task('default', ['lint', 'jsx'], function(){
	//gulp.watch('./public/javascripts/*.js', function() {
		gulp.run('jsx');
	// });
});