const scraperjs = require('scraperjs')
const axios = require("axios");
const cheerio = require("cheerio");
const _url = require('url');
const _math = require('mathjs');
const zsExtract = require('zs-extract');
const request = require('request')
var cookie = require('tough-cookie')
const wrapper = require('axios-cookiejar-support')

class OtakuController {
    async home (_, req) {
        let result = {};
        const baseUrl = 'https://otakupoi.com/otakudesu/search/?q=f'
        // request(baseUrl, function(error, response, body) {
        //     if(!error) {
        //       console.log(response)
        //     }
        //     else {
        //       console.log('There was an error!');
        //     }
        // });
        // const response = await Axios.get(baseUrl)
        const jar = new cookie.CookieJar();
        const client = wrapper.wrapper(axios.create({ jar }));

        const response = await client.get(baseUrl);
        const $ = cheerio.load(response.data);
        const getRow = $('.row').find('.container')
        const images = []
        const element = getRow.find('.main-col')
        element.find('.bg-white').find('a').each(function() {
            const scrape = {
                title: $(this).find('.titlelist').text(),
                image: $(this).find('img').attr('src'),
                url: $(this).attr('href')
            }
            images.push(scrape)
            // console.log('foo')
        })
        console.log(images)
        
        req.send('foo')
    }
}

module.exports = new OtakuController