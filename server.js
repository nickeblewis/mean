'use strict';

/**
 * Module dependencies.
 */

var express = require('express');
var config = {
    port: 8080
};

var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(config.port);

console.log('Express app started on port ' + config.port);
