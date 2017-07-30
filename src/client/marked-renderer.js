const marked = require('marked');
const renderer = new marked.Renderer();
const cheerio = require('cheerio');

renderer.html = function(html) {
  // marked has to be the first attribute
  const $ = cheerio.load(html);
  const markedDivs = $('div[marked]');
  if (markedDivs.length > 0) {
    // loop through all div tags with marked attribute
    for (var i = markedDivs.length - 1; i > -1; i--) {
      marked(markedDivs.eq(i).html(), function(err, html) {
        markedDivs.eq(i).html(html);
      });
    }
    html = $('body').html();
  }
  return html;
};
renderer.paragraph = function(text) {
  let isHtml = /<[a-z][\s\S]*>/i.test(text);
  if (isHtml) return text + '\n';
  else return '<p>' + text + '</p>\n';
};

module.exports = renderer;
