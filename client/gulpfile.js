var gulp=require('gulp');
var watch=require('gulp-watch');
var livereload=require('gulp-livereload');
gulp.task('check', function(){
	return gulp.src(['*', 'app/*'])
		.pipe(livereload());
});
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('*',['check']);
	gulp.watch('app/*',['check']);
});
gulp.task('default', ['check', 'watch']);

