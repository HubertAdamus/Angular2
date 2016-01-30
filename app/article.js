System.register([], function(exports_1) {
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                //? - nie wymagany parametr
                function Article(title, link, description, image, votes) {
                    this.title = title;
                    this.link = link;
                    this.description = description;
                    this.image = image;
                    this.votes = votes || 0;
                }
                Article.prototype.votePlus = function () {
                    this.votes += 1;
                };
                Article.prototype.voteMinus = function () {
                    this.votes -= 1;
                };
                return Article;
            })();
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article.js.map