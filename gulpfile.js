var gulp 		= require('gulp'),
	jade 		= require('gulp-jade'),
	sass 		= require('gulp-sass'),
	rename 		= require('gulp-rename'),
	prefix 		= require('gulp-autoprefixer'),
	useref 		= require('gulp-useref'),
	uglify 		= require('gulp-uglify'),
	coffee 		= require('gulp-coffee'),
	clean 		= require('gulp-clean'),
	gulpif 		= require('gulp-if'),
	filter 		= require('gulp-filter'),
	size 		= require('gulp-size'),
	imagemin 	= require('gulp-imagemin'),
	concatCss	= require('gulp-concat-css'),
	minifyCss 	= require('gulp-minify-css'),
	browserSync = require('browser-sync'),
	wiredep 	= require('wiredep').stream,
	reload 		= browserSync.reload;



// ====================================================
// ====================================================
// ============== Локальная разработка APP ============

//jade 
gulp.task('jade', function() {
		gulp.src('src/templates/*.jade')
		.pipe(jade({ pretty: true }))
		.on('error', log)
		.pipe(gulp.dest('src/'))
		.pipe(reload({stream: true}));
});

// css
gulp.task('css', function() {
		gulp.src('src/scss/main.scss')
		.pipe(sass())
		.on('error', log)		
		.pipe(prefix('last 2 versions','>1%','ie 7'))
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(reload({stream: true}));
})

gulp.task('coffee', function(){
    gulp.src('src/js/main.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('src/js'));
});

// Подключаем ссылки на bower components
gulp.task('wiredep', function () {
	gulp.src('src/templates/common/head.jade')
		.pipe(wiredep({
			ignorePath: /^(\.\.\/)*\.\./
		}))
		.pipe(gulp.dest('src/templates/common/'))
});

// Запускаем локальный сервер (только после компиляции jade)
gulp.task('server', ['jade'], function () {  
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: 'src'
		}
	});  
});

// слежка и запуск задач 
gulp.task('watch', function () {
	gulp.watch('bower.json', ['wiredep'])
	gulp.watch('src/templates/**/*.jade', ['jade'])
	gulp.watch('src/scss/**/*.scss',['css'])
	gulp.watch('src/js/*.coffee',['coffee'])
	gulp.watch([
		'src/js/**/*.js',
		'src/css/**/*.css'
	]).on('change', reload);
});

// Задача по-умолчанию 
gulp.task('default', ['server', 'watch']);




// ====================================================
// ====================================================
// ================= Сборка DIST ======================

// Очистка папки
gulp.task('clean', function () {
	return gulp.src('dist')
		.pipe(clean());
});

// Переносим HTML, CSS, JS в папку dist 
gulp.task('useref', function () {
	var assets = useref.assets();
	return gulp.src('src/*.html')
		.pipe(assets)
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss({compatibility: 'ie8'})))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

// Перенос шрифтов
gulp.task('fonts', function() {
	gulp.src('src/fonts/*')
		.pipe(filter(['*.eot','*.svg','*.ttf','*.otf','*.woff','*.woff2']))
		.pipe(gulp.dest('dist/fonts/'))
});

// Картинки
gulp.task('images', function () {
	return gulp.src('src/img/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/img'));
});

// Остальные файлы, такие как favicon.ico и пр.
gulp.task('extras', function () {
	return gulp.src([
		'src/*.*',
		'!src/*.html'
	]).pipe(gulp.dest('dist'));
});

// Сборка и вывод размера содержимого папки dist
gulp.task('dist', ['useref', 'images', 'fonts', 'extras'], function () {
	return gulp.src('dist/**/*').pipe(size({title: 'build'}));
});

// Собираем папку DIST (только после компиляции Jade)
gulp.task('build', ['clean', 'jade', 'css'], function () {
	gulp.start('dist');
});

// Проверка сборки 
gulp.task('server-dist', function () {  
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: 'dist'
		}
	});
});



// ====================================================
// ====================================================
// ===================== Функции ======================

// Более наглядный вывод ошибок
var log = function (error) {
	console.log([
		'',
		"----------ERROR MESSAGE START----------",
		("[" + error.name + " in " + error.plugin + "]"),
		error.message,
		"----------ERROR MESSAGE END----------",
		''
	].join('\n'));
	this.end();
}
