module.exports = function() {
    $.gulp.task("sprite", function() {
        return $.gulp.src("./src/img/icons/svg/*.svg")
            //.pipe($.replace("&gt;", ">"))
            .pipe($.svgSprite({
				preview: false,
                cssFile: "../../../src/css/partials/_sprite.scss",
				svg: {
					sprite: "../../../docs/img/sprites/sprite.svg"
				}
            }))
            .pipe($.gulp.dest("./docs/img/sprites/"))
            .pipe($.debug({"title": "sprite"}));
    });
};
