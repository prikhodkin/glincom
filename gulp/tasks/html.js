module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src(["./src/views/**/index.html","./src/views/**/*.html", "!./src/views/blocks/*.html"])
            .pipe($.rigger())
            .pipe($.replace("../docs/", "../"))
            .pipe($.gulp.dest("./docs/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
    });
};
