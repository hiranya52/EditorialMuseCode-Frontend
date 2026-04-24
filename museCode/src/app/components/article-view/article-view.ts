import { Component } from '@angular/core';
import { AIChat } from "../aichat/aichat";

@Component({
  selector: 'app-article-view',
  imports: [AIChat],
  templateUrl: './article-view.html',
  styleUrl: './article-view.css',
})
export class ArticleView {}
