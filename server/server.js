const express = require('express');

const app = express();

app.use(express.static('server/public'));

app.listen(5000, function() {
    console.log('Running on port 5000');    
});