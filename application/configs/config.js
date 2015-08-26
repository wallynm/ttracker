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
    mongoUrl: 'mongodb://heroku_cn6vx9lj:kat601c5tfh46e0674vp72r0ph@ds035593.mongolab.com:35593/heroku_cn6vx9lj'
  },
}

module.exports = function(mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
};
