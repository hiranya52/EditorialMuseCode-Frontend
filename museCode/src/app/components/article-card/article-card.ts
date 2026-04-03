import { Component, Input } from '@angular/core';
import { Article } from '../../../model/Article.model';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
})
export class ArticleCard {

  @Input() article!: Article;

}
