import { Component } from '@angular/core';
import { Article } from '../../../model/Article.model';

@Component({
  selector: 'app-feed',
  imports: [],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {

  articles: Article[] = [
    {
      title: "The Architecture of Silence",
      description: "Minimalist design resurgence...",
      author: "Julian Thorne",
      date: "Oct 12, 2023",
      category: "Architecture",
      readTime: "8 min read",
      image: "https://picsum.photos/400/300",
      avatar: "https://i.pravatar.cc/50?img=1"
    },
    {
      title: "Digital Antiquity",
      description: "Bridging physical and virtual worlds...",
      author: "Elena Vance",
      date: "Oct 10, 2023",
      category: "Technology",
      readTime: "12 min read",
      image: "https://picsum.photos/401/300",
      avatar: "https://i.pravatar.cc/50?img=2"
    }
  ];

}
