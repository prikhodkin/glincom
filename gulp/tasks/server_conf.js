module.exports = function() {
	$.gulp.task("server_conf", function() {
		return $.gulp.src("./src/.htaccess")
			.pipe($.gulp.dest("./docs/"))
			.pipe($.debug({"title": "htaccess"}));
	});
};
