module.exports = function () {
  $.gulp.task("fonts", function () {
      return $.gulp.src(["./src/fonts/**/*.{woff,woff2}", "!./src/vendor/**/*.{woff,woff2}"])
          .pipe($.gulp.dest("./dest/fonts/"))
          .pipe($.debug({"title": "fonts"}))
          .on("end", $.browsersync.reload);
  });
};

