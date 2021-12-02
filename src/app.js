const puppeteer = require('puppeteer');
require('./db/conn');
const Sport = require('./models/sports');


    puppeteer.launch({ headless: true, args: ['--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] }).then(async browser => {

        const page = await browser.newPage();
        await page.goto("https://www.firstpost.com");
        await page.waitForSelector('body');
    
        var rposts = await page.evaluate(() => {
           
            let page = document.body.querySelectorAll("li")[4].getAttribute("href");
            let posts = page.querySelectorAll('.big-thumb');       
            // postItems = [];
    
            posts.forEach((item) => {
                let head = ''
                let title = ''
                let summary = ''
                let link = ''
                let images = '';
                try{
                    imglink = item.querySelector("img").getAttribute("data-src");
                 head = item.querySelector(".title-wrap");
                 title = head.querySelectorAll("a")[1].innerHTML;
                if (title!=''){
                     summary = item.querySelector('p').innerText;
                     link = item.querySelector('a').href;
                     postItems.push({title: title, link: link, summary: summary, images:imglink});
                     const sportData = new Sport({
                        title: title,
                        link: link,
                        content: summary,
                        image: imagelink
                    })
                    const data = await sportData.save();
                    console.log(data);
                }
                }catch(e){
                    console.log(e);
                }
            });
    
            
            
            // var items = { 
            //     "posts": postItems
            // };
    
            // return items;
            
        });
    
        console.log(rposts);
        await browser.close();
    
    }).catch(function(error) {
        console.error(error);
    });
    
    
    

