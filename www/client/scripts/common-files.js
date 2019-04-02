var exec = require('child_process').exec,
    glob = require('glob'),
    cpx = require("cpx"),
    root_dir = __dirname + '/../..',
    public_dir = root_dir + '/client/public/common',
    src_dir = root_dir + '/client/src/common',
    common_dir = root_dir + '/vendor/common';

function transformDir(dir) {
  return ('public' === String(dir) ? public_dir :  src_dir + '/' + dir)
}


exports.watch = function addWatcher(dir) {
  cpx.watch(common_dir + '/' + dir + '/**', transformDir(dir))
  .on("copy", (e) => console.log("copy: " + e.srcPath))
  .on("remove", (e) => console.log("remove: " + e.srcPath))
  .on("watch-ready", (e) => console.log("watch-ready"))
  .on("watch-error", (err) => console.log("watch-error: ", err))
};

exports.copy = function copyDir(dir) {
  cpx.copy(common_dir + '/' + dir + '/**', transformDir(dir))
};

// [
//   'js',
//   'assets'
// ].map((dir) => addWatchers(dir))

(function(args) {
  "use strict";

  args = args || []

  var selected = exports[args[0]];
  if(selected){
    var sendIt = [...args.slice(1)]
    sendIt.map((d) => selected(d))
  }
})(process.argv.slice(2))
