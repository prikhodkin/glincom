module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src(["./src/img/**/*.{jpg,jpeg,png,gif,svg}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"])
            .pipe($.newer("./docs/img/"))
            .pipe($.gulp.dest("./docs/img/"))
            .pipe($.debug({"title": "images"}))
            .on("end", $.browsersync.reload);
    });
};
