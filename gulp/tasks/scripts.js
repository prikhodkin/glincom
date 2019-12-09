module.exports = function () {
    $.gulp.task("scripts", function () {
        return $.gulp.src(["./src/js/**/*.js", "!./src/vendor/**/*.js"])
            .pipe($.rigger())
            .pipe($.replace("../docs/js/", "../"))
            // .pipe($.sourcemaps.init())
            .pipe($.babel({presets: ["@babel/preset-env"]}))
            // .pipe($.concat("main.js"))
            // .pipe($.uglify())
            // .pipe($.rename({suffix: ".min"}))
            // .pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./docs/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.browsersync.reload);
    });
};
