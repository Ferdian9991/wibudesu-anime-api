const scraperjs = require('scraperjs')
const { default: Axios } = require("axios");
const cheerio = require("cheerio");
const _url = require('url');
const _math = require('mathjs');
const zsExtract = require('zs-extract');

class OtakuController {
    async home (_, req) {
        let home = {};
        let on_going = [];
        let complete = [];
        const baseUrl = 'https://otakudesu.moe/'
        const response = await Axios.get(baseUrl)
        console.log(response)
        req.send('foo')
    }
}

module.exports = new OtakuController