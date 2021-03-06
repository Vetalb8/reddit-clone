import {Component, OnInit} from "@angular/core";
import {Article} from "../article/article";
import {ArticleService} from "../article.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'reddit-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles: Observable<Article[]>;

  constructor(private articleService: ArticleService,
              private activeRoute: ActivatedRoute) {
    this.articles = articleService.orderedArticles;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const sourceKey = params['sourceKey'];
      this.articleService.updateArticles(sourceKey);
    });
  }

}
