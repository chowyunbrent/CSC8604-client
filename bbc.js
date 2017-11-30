let request = require('request');
let DOMParser = require('xmldom').DOMParser;

function parseRss(response) {
    let news = [];
    let doc = new DOMParser().parseFromString(response, 'rss/channel/item/title');
    let titles = doc.getElementsByTagName("title");
    for (let i = 0; i < titles.length; i++) {
        var content = titles[i].textContent;
        if (titles.length > 0) { 
            news.push(content);
        }
    }
    return news;
}


let url = 'http://feeds.bbci.co.uk/news/video_and_audio/uk/rss.xml?edition=uk';

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
     console.log(parseRss(body));
    }
});
