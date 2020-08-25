const gulp=require('gulp')
const autoprefixer=require('gulp-autoprefixer')

gulp.src('./index.css')
    .pipe(autoprefixer({
        overrideBrowserslist:['since 2010'],
        cascade:false
    }))
.pipe(gulp.dest('dist'))