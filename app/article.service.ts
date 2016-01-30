import {ARTICLES} from './article-data';
import {Injectable} from 'angular2/core';
//import {Http} from 'angular2/http'

@Injectable()

export class ArticleService {
    getArticles() {
        return Promise.resolve(ARTICLES);
    }
}


//class DataService{
//    items:Array<any>
//
//    constructor (@Inject(Http) http:Http){
//
//    }
//}