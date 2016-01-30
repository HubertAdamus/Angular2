System.register(['./article'], function(exports_1) {
    var article_1;
    var ARTICLES;
    return {
        setters:[
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            exports_1("ARTICLES", ARTICLES = [
                new article_1.Article('Semantic UI', 'http://semantic-ui.com/', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ad adipisci.', 'http://semantic-ui.com/images/logo.png', 0),
                new article_1.Article('Angular2', 'http://angular.io', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ad adipisci.', 'resources/images/ang.png', 0),
                new article_1.Article('Angular2', 'http://angular.io', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ad adipisci.', 'resources/images/ang.png', 0),
            ]);
        }
    }
});
//# sourceMappingURL=article-data.js.map