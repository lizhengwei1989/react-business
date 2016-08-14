var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.configbuild.js");
gulp.task("default", function(callback) {
  var myConfig = Object.create(webpackConfig);

  webpack(
    // configuration
    myConfig
  , function(err, stats) {
    // if(err) throw new gutil.PluginError("webpack", err);
    // gutil.log("[webpack]", stats.toString({
    //	 // output options
    // }));
    callback();
  });
});