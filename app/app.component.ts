import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {NgFor, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control, NgClass} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';
import {Validator} from "../node_modules/angular2/ts/src/common/forms/directives/validators";
import {Validator} from "../node_modules/angular2/ts/src/common/forms/directives/validators";
import {Validator} from "../node_modules/angular2/ts/src/common/forms/directives/validators";
import {Validator} from "../node_modules/angular2/ts/src/common/forms/directives/validators";
import ArrayTypeNode = ts.ArrayTypeNode;

@Component({
    selector: 'articles',
    directives: [ArticleComponent, FORM_DIRECTIVES, NgClass],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
    articles:Article[];
    articleForm:ControlGroup;

    selectedArticle: Article;

    title:Control = new Control("", Validators.required);
    link:Control = new Control("", Validators.required);
    description:Control = new Control("", Validators.required);
    image:Control = new Control("", Validators.required);

    constructor(private _articleService:ArticleService, fb:FormBuilder) {
        this.articleForm = fb.group({
            'title': this.title,
            'link': this.link,
            'description': this.description,
            'image': this.image,
        })
    }

    getArticles() {
        this._articleService.getArticles().then(articles => this.articles = articles);
    }

    ngOnInit() {
        this.getArticles();
    }

    onSubmit() {
        this.articles.push(new Article(this.title.value, this.link.value, this.description.value, this.image.value));
        this.title.updateValue("");
        this.link.updateValue("");
        this.description.updateValue("");
        this.image.updateValue("");
    }

    onSelect(article: Article, event) {
        event.preventDefault();
        this.selectedArticle = article;
    }

}

