var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	watch = require('gulp-watch'),
	open = require('open'),
	plumber = require('gulp-plumber'),
	runSequence = require('run-sequence'),
	assets = require('gulp-assets'),
	clean = require('gulp-clean'),
	nodemon = require('gulp-nodemon');

var IN = "working/",
	OUT = "build/";
gulp.task('css', function() {
	return gulp.src(IN + "index.html")
		.pipe(plumber())
		.pipe(assets.css())
		.pipe(gulp.dest(OUT));
});

gulp.task('clean', function() {
	return gulp.src(OUT)
		.pipe(clean());
})

gulp.task('openBrowser', function() {
	var port = process.env.PORT || 8000;
	open('http://localhost:' + port +'#/home');
})

gulp.task('run', function() {
	nodemon({
        script: 'server/server.js',
        watch: 'server/',
        ignore: [ 'server/grammar.js' ],
        env: { 'NODE_ENV': 'development' }
    });
})

gulp.task('html', function() {
	return gulp.src(IN + "**/*.html")
		.pipe(plumber())
		.pipe(gulp.dest(OUT));
})

gulp.task('js', function() {
	return gulp.src(IN + "index.html")
		.pipe(plumber())
		.pipe(assets.js())
		.pipe(gulp.dest(OUT));
});

gulp.task('build', ['css', 'js' , 'html']);

gulp.task('livereload', function() {
	livereload.listen();
	gulp.watch(IN + "**/*", ["build"]);
	gulp.watch(OUT + "**/*", livereload.changed);
})

gulp.task('dev', function() {
	
	return runSequence('clean', 'openBrowser',  'run', 'build', 'livereload');
})