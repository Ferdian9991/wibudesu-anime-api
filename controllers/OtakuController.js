const scraperjs = require('scraperjs')
const Axios = require("axios");
const cheerio = require("cheerio");
const _url = require('url');
const _math = require('mathjs');
const zsExtract = require('zs-extract');
const request = require('request')
const got = require("got");

class OtakuController {
    async home (_, req) {
        let home = {};
        let on_going = [];
        let complete = [];
        const baseUrl = 'https://otakudesu.moe/'
        // request(baseUrl, function(error, response, body) {
        //     if(!error) {
        //       console.log(response)
        //     }
        //     else {
        //       console.log('There was an error!');
        //     }
        // });
        // const response = await Axios.get(baseUrl)
        const response = await got.get(baseUrl)
        console.log(response.body)
        
        req.send('foo')
    }
}

module.exports = new OtakuController