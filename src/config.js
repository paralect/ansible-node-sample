var path = require('path');
var setty = require('setty');
setty.load({settingsDir: path.join(__dirname, './settings')});

module.exports = {
    env: setty.get("env"),
    port: setty.get("port")
};
