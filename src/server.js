var jokeService = require('./jokeService');
var config = require('./config');

var app = require('http').createServer(function(req, res){
  jokeService.getRandomJoke(function(err, joke){
    res.writeHead(200);
    res.end(joke);
  });
});

app.listen(config.port, function(){
  console.log([new Date(), 'Demo server started on ', config.port].join(""));
});
