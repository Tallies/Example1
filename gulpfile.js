var gulp = require('gulp'),
browserify = require('browserify'),
jshint = require("gulp-jshint"),
source = require("vinyl-source-stream"),
reactify = require('reactify');


var paths = {
	src : ["./client_lib/main.js", "./Components/*.jsx"],
	js : "./public/javascripts"
}

gulp.task('jshint', function() {
  return gulp.src(paths.src[0])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
	var b = browserify();
	b.transform(reactify);
	b.add(paths.src[0]);
	
	return b.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest(paths.js));
});

gulp.task('watch', function() {
	gulp.watch(paths.src, ['jshint', 'browserify']);
})

gulp.task('default', ['jshint', 'browserify', 'watch']);