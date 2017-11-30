let request = require('request');
let DOMParser = require('xmldom').DOMParser;

function parseWeather(response) {
    let forecast = [];
    let doc = new DOMParser().parseFromString(response, 'text/xml');
    let times = doc.getElementsByTagName("time");
    for (let i = 0; i < times.length; i++) {
        let time = times[i].getAttribute("from");
        let temperatures = times[i].getElementsByTagName("temperature");
        if (temperatures.length > 0) { 
            let temperature = temperatures[0].getAttribute('value');
            forecast.push({ 
                'time': new Date(time), 
                'temperature': parseFloat(temperature)
            });
        }
    }
    return forecast;
}


var location = [ '54.9733', '-1.6140' ];
var url = ("http://api.met.no/weatherapi/locationforecast/1.9/?lat="+location[0]+";lon="+location[1]);

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
     console.log(parseWeather(body));
    }
});
