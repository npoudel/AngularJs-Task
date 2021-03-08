var _ = require('lodash');

// Loads the config file matching the `profile` parameter,
// returns the default config + values from that file.
var buildConfig = function (profile) {
  var conf1 = 'config.js';
  return _.merge(
    grunt.file.readJSON(conf1)
  );
};