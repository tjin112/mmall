var express = require('express');
var port = process.env.PORT || 8080

var app = express();

app.use(express.static('./'));

app.listen(port, function(err) {
    if(err) {
        console.log(err);
        return;
    }

    console.log('listening on ' + port + ': ');
})