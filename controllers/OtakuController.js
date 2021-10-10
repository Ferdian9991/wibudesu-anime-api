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
        Axios.get(baseUrl)
            .then((response) => {
            const $ = cheerio.load(response.data);
            const element = $(".venz");
            let episode, uploaded_on, day_updated, thumb, title, link, id;
            element
                .children()
                .eq(0)
                .find("ul > li")
                .each(function () {
                $(this)
                    .find(".thumb > a")
                    .filter(function () {
                    title = $(this).find(".thumbz > h2").text();
                    thumb = $(this).find(".thumbz > img").attr("src");
                    link = $(this).attr("href");
                    id = link.replace(`${baseUrl}anime/`, "");
                    });
                uploaded_on = $(this).find(".newnime").text();
                episode = $(this).find(".epz").text().replace(" ", "");
                day_updated = $(this).find(".epztipe").text().replace(" ", "");
                on_going.push({
                    title,
                    id,
                    thumb,
                    episode,
                    uploaded_on,
                    day_updated,
                    link,
                });
                });
            home.on_going = on_going;
            return response;
            })
            .then((response) => {
            const $ = cheerio.load(response.data);
            const element = $(".venz");
            let episode, uploaded_on, score, thumb, title, link, id;
            element
                .children()
                .eq(1)
                .find("ul > li")
                .each(function () {
                $(this)
                    .find(".thumb > a")
                    .filter(function () {
                    title = $(this).find(".thumbz > h2").text();
                    thumb = $(this).find(".thumbz > img").attr("src");
                    link = $(this).attr("href");
                    id = link.replace(`${baseUrl}anime/`, "");
                    });
                uploaded_on = $(this).find(".newnime").text();
                episode = $(this).find(".epz").text().replace(" ", "");
                score = parseFloat($(this).find(".epztipe").text().replace(" ", ""));
                complete.push({
                    title,
                    id,
                    thumb,
                    episode,
                    uploaded_on,
                    score,
                    link,
                });
                });
            home.complete = complete;
            req.status(200).json({
                status: "success",
                baseUrl: baseUrl,
                home,
            });
            })
            .catch((e) => {
            console.log(e.message);
            });
    }
}

module.exports = new OtakuController