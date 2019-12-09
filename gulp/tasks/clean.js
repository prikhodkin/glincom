module.exports = function() {
    $.gulp.task("clean", function() {
        return $.gulp.src("./docs/*", {read: false})
            .pipe($.clean())
            .pipe($.debug({"title": "clean"}));
    });
};
