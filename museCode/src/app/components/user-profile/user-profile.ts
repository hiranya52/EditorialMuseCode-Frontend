import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleCard } from "../article-card/article-card";
@Component({
  selector: 'app-user-profile',
  imports: [ArticleCard, CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

  showEdit = false;

  openEdit() {
    this.showEdit = true;
  }

}
