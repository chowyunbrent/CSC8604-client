let request = require('request');

var vote = 'B';

let url = 'https://docs.google.com/forms/d/e/1FAIpQLSeMaijlwC2HRnO6-SL4J2fx09Hv5-TenL14_fIMMRbo3Mk__g/formResponse?entry.825512073='+vote;

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
     console.log('voted: '+ vote);
    }
});
