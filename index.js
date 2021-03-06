"use strict";

function PublishTask(params) {
  this.params = (params || {});
}

PublishTask.displayName = 'PublishTask';

PublishTask.getDefaults = function() {
  return {
    pkg: false,
    src: ['::src/assets/**/*'],
    search: ['::src/assets/**/*'],
    dist: '::dist'
  };
};

PublishTask.prototype.enqueue = function(gulp, params) {
    var sources = Array.isArray(params.src) ? params.src : [params.src];
    if (params.pkg) {
      sources = sources.map(function(src) {
        return pkg(params.pkg, src);
      });
    }

    return gulp.src(sources)
      .pipe(gulp.dest(params.dist));
};

PublishTask.prototype.generateWatcher = function() {
  return true;
};

function pkg(pkgName, path) {
  return './node_modules/' + pkgName + '/' + path;
}

module.exports = PublishTask;
