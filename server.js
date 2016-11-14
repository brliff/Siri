var express = require('express');

var app = express();

app.options('/', function(req, res) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send();
});

var getRandomMessage = function() {

    function getRand(max) {
        var min = Math.ceil(0);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var messages = [
        "Hello there.",
        "I'm sorry, " +
        "I cannot take any requests at this time.",
        "I can tell you how to do that.",
        "You mom is a server",
        "The Herp Derp",
        "Will you server me",
        "Drumpf..."
    ];
    return messages[getRand(messages.length)];
}

var headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
}

app.get('/', function(req, res) {
    res.status(200)
        .set(headers)
        .send(JSON.stringify({
        message: getRandomMessage()
    }))
});

app.listen(8887, function() {
    console.log('Listing on port: I server you up');
});

