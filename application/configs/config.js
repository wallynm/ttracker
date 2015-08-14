var config = {
  local: {
    mode: 'local',
    port: 3000,
    mongoUrl: 'mongodb://localhost:27017/ttracker'
  },
  staging: {
    mode: 'staging',
    port: 3005,
    mongoUrl: 'mongodb://localhost:27017/ttracker'
  },
  prod: {
    mode: 'prod',
    port: process.env.PORT || 3010,
    mongoUrl: 'mongodb://localhost:27017/ttracker'
  },
}

module.exports = function(mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
};
