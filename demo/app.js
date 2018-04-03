var chokidar = require('chokidar');
var watcher = chokidar.watch('.', {ignored: /[\/\\]\./, persistent: true});
var log = console.log.bind(console);

watcher
    .on('change', function(path) { log('changed'); });
