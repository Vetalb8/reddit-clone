import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {Article} from "./article";

@Component({
  selector: 'reddit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  upVote() {
    this.article.voteUp();
  }

  downVote() {
    this.article.voteDown();
  }

  constructor() { }

  ngOnInit() {
  }

}
