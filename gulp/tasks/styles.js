module.exports = function() {
    $.gulp.task("styles", function() {
        return $.gulp.src(["./src/css/**/main.scss", "!./src/vendor/**/*.css"])
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer({browsers: ["last 12 versions", "> 1%", "ie 8", "ie 7"]}))
            .pipe($.replace("../../dest/", "../"))
            .pipe($.plumber.stop())
            .pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./dest/css/"))
            .pipe($.debug({"title": "styles"}))
            .on("end", $.browsersync.reload);
    });
};
