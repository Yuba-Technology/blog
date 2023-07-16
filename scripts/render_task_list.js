hexo.extend.filter.register("after_render:html", function (str, data) {
  const cheerio = require("cheerio");
  const $ = cheerio.load(str);

  // 获取article.post-content中的所有li元素
  const listItems = $("article.post-content li");

  // 替换[ ]和[x]为input元素
  listItems.each(function () {
    const listItem = $(this);
    listItem.html(
      listItem
        .html()
        .replace(/^\s*\[ \]/g, '<input type="checkbox" disabled>')
        .replace(/^\s*\[[xX]\]/g, '<input type="checkbox" disabled checked>')
    );
  });

  // 返回修改后的HTML代码
  return $.html();
});
