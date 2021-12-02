const puppeteer = require('puppeteer');
require('./db/conn.js');
const Sport = require(__dirname + '/models/sports');


    puppeteer.launch({ headless: true, args: ['--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] }).then(async browser => {

        const page = await browser.newPage();
        await page.goto("https://www.firstpost.com/category/sports");
        await page.waitForSelector('body');
    
        var rposts = await page.evaluate(async() => {
            console.log("Control reached here");
            // let page = document.getElementsByClassName(".nav-events")[4].getAttribute("href");
            // console.log(page);
            let posts = document.body.querySelectorAll('.big-thumb');       
             postItems = [];
    
            posts.forEach(async(item) => {
                let head = ''
                let title = ''
                let summary = ''
                let link = ''
                let images = '';
                console.log(item);
                try{
                    imglink = item.querySelector("img").getAttribute("data-src");
                 head = item.querySelector(".title-wrap");
                 console.log(head);
                 title = head.querySelectorAll("a")[1].innerHTML;
                if (title!=''){
                     summary = item.querySelector('p').innerText;
                     link = item.querySelector('a').href;
                     postItems.push({title: title, link: link, summary: summary, images:imglink});
                     
                }
                }catch(e){
                    console.log("Error encountered at 1.");
                    console.log(e);
                }
            });
            return postItems;
            
        });
    
        //console.log(rposts);

        const postItems = rposts;

        for(var i=0 ; i<postItems.length ; i++)
            {
                const sportData = new Sport({
                    title: postItems[i].title,
                    link: postItems[i].link,
                    content: postItems[i].summary,
                    image: postItems[i].images
                })
                const data = await sportData.save();
            }


        await browser.close();
    
    }).catch(async function(error) {
        console.log("Error encountered at 2.");
        console.error(error);
    });
    
    
    

