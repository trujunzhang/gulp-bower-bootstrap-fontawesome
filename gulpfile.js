var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower');

var config = {
     sassPath: './resources/sass',
     bowerDir: './bower_components' 
}

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() { 
                               return gulp.src([
                                   config.bowerDir + '/fontawesome/fonts/**.*',
                                   config.bowerDir + '/bootstrap-sass-official/assets/fonts/**',
]) 
        .pipe(gulp.dest('./public/fonts')); 
});

gulp.task('javascript', function() {
    return gulp.src([
            config.bowerDir + '/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            config.bowerDir + '/jquery/dist/jquery.js'
        ])
        .pipe(gulp.dest('./public/javascript'));
});

gulp.task('animate.css', function() {
    return gulp.src([
            config.bowerDir + '/animate.css/animate.css'
        ])
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('css', function() { 
    return gulp.src(
            config.sassPath + '/style.scss'
    )
         .pipe(sass({
             style: 'compressed',
             loadPath: [
                 './resources/sass',
                 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                 config.bowerDir + '/fontawesome/scss',
             ]
         }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 
         .pipe(gulp.dest('./public/styles')); 
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

  gulp.task('default', ['bower', 'icons', 'css', 'javascript', 'animate.css']);
