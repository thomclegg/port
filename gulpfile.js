var gulp = require('gulp');
var cleanCss = require('gulp-clean-css')
// var postCss = require('gulp-postcss')

var sourceMaps = require('gulp-sourcemaps')

var concat = require('gulp-concat')

var browserSync = require('browser-sync').create()

var imagemin = require("gulp-imagemin")



gulp.task("css", function() {
  return gulp.src([
      "src/css/normalise.css",
      "src/css/project.css",
      "src/css/rebuild_style.css",
      "src/css/responsive.css",
      "src/css/storyhouse.css",
      "src/css/style.css"
  ])
  .pipe(sourceMaps.init())
  // .pipe(
  //   postCss([
  //     require("autoprefixer"),
  //     require("postcss-preset-env")({
  //       stage: 1,
  //       browsers: ["IE 11", "last 2 versions"]
  //     })
  //   ])
  // )

  .pipe(concat('style.css'))

  .pipe(cleanCss({
      compatibility: 'ie8'
    })
  )
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})

gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
})

gulp.task("css", function() {
  return gulp.src("src/css/*")
    .pipe(gulp.dest("dist/css"))
})

gulp.task("fonts", function() {
  return gulp.src("src/fonts/*")
    .pipe(gulp.dest("dist/fonts"))
})

gulp.task("js", function() {
  return gulp.src("src/js/*.js")
    .pipe(gulp.dest("dist/js"))
})

gulp.task("images", function() {
  return gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
})


gulp.task("watch", function() {
  browserSync.init(["*.html"], {
    server: {
      baseDir: "dist"
    }
  })



  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
  gulp.watch("src/css/*", ["css"])
  gulp.watch("src/fonts/*", ["fonts"])
  gulp.watch("src/img/*", ["images"])
  gulp.watch("src/js/*", ["js"])

})


gulp.task('default', ["html", "css", "fonts", "js", "images", "watch"])
