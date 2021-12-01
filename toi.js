const rp = require("request-promise");
const cheerio = require("cheerio");
const sportsUrl = 'https://timesofindia.indiatimes.com/sports';
const newsUrl = 'https://timesofindia.indiatimes.com/briefs';
const businessUrl = 'https://timesofindia.indiatimes.com/business';
rp(sportsUrl, function (error, response, html) {
    if(error){
        console.error('error:', error);   
    }
    else{
        getHTML(html);
    }
});


function getHTML(html) {
  let selTool = cheerio.load(html);
const links = [];
  let id = selTool("h5");
  
//   c_000102
console.log(id.length)
//   for(var i = 0 ; i<id.length ; i++){
//         links.push(id[i].attribs.href);
//   }
//   console.log(links);
// console.log(id);
}
