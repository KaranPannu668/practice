const rp = require("request-promise");
const cheerio = require("cheerio");
const sportsUrl = 'https://timesofindia.indiatimes.com/sports';
rp(sportsUrl, function (error, response, html) {
    if(error){
        console.error('error:', error);   
    }
    else{
        console.log(html);
    }
});

