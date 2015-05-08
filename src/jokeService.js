var request = require('request');

module.exports.getRandomJoke = function(callback){
    var r = request.defaults({followRedirect: true,
        followAllRedirects: false,
        json: true,
        headers: {
            Accept:'*/*',
            'Cache-Control':'no-cache'
        }});

    r.get('http://api.icndb.com/jokes/random', function(err, httpResponse, body){
        if(err){
            console.log('Failed to fetch joke', err);
            return callback(null);
        }

        callback(null, body.value.joke);
    });
};