// Generated by CoffeeScript 1.9.0
var applications, disk, token;

applications = require('./applications');

disk = require('./disk');

token = require('../middlewares/token');

module.exports = {
  'apps/:name/start': {
    post: [token.check, applications.start]
  },
  'apps/:name/install': {
    post: [token.check, applications.install]
  },
  'drones/:name/start': {
    post: [token.check, applications.install]
  },
  'apps/:name/stop': {
    post: [token.check, applications.stop]
  },
  'drones/:name/stop': {
    post: [token.check, applications.stop]
  },
  'apps/:name/update': {
    post: [token.check, applications.update]
  },
  'apps/update-stack': {
    post: [token.check, applications.updateStack]
  },
  'apps/restart-controller': {
    post: [token.check, applications.restartController]
  },
  'drones/:name/light-update': {
    post: [token.check, applications.update]
  },
  'apps/:name/uninstall': {
    post: [token.check, applications.uninstall]
  },
  'drones/:name/clean': {
    post: [token.check, applications.uninstall]
  },
  'apps/all': {
    get: [token.check, applications.all]
  },
  'apps/started': {
    get: [token.check, applications.running]
  },
  'drones/running': {
    get: [token.check, applications.running]
  },
  'diskinfo': {
    get: [token.check, disk.info]
  }
};
