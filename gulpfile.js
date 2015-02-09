var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('copyFiles', function () {
	return gulp.src('dir1/*')
		.pipe(gulp.dest('dir2'));
});

gulp.task('sass', function () {
	return gulp.src('sass/style.scss')
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.minifyCss())
		.pipe(gulp.dest('build'));
});

gulp.task('default', function () {
	gulp.watch('dir1/*', 'copyFiles');
});
