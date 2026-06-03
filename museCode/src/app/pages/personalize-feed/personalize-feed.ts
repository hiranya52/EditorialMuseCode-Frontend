import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FeedService } from '../../service/feed/feed-service';
import { Category } from '../../../model/Category.model';

@Component({
  selector: 'app-personalize-feed',
  imports: [CommonModule],
  templateUrl: './personalize-feed.html',
  styleUrl: './personalize-feed.css',
})
export class PersonalizeFeed implements OnInit {

  private feedService = inject(FeedService);

  categories: Category[] = [];

  selectedCategoryIds: number[] = [];

  normalClass =
    'font-label text-sm px-6 py-3 rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:border-primary/40 hover:text-primary transition-all duration-200';

  selectedClass =
    'group relative px-6 py-3 rounded-full border-2 border-primary-container bg-surface-container-lowest text-primary font-medium transition-all duration-300 shadow-[0_0_15px_rgba(3,33,33,0.15)] flex items-center gap-2';

  ngOnInit(): void {

    // this.feedService.getAllCategories().subscribe({
    //   next: (res) => {
    //     this.categories = res;
    //   }
    // });

    this.feedService.getAllCategories().subscribe((res =>{

      // this.categories=res;
      console.log(res);


    }))

  }

  toggleCategory(categoryId: number) {

    if (this.selectedCategoryIds.includes(categoryId)) {

      this.selectedCategoryIds =
        this.selectedCategoryIds.filter(id => id !== categoryId);

    } else {

      this.selectedCategoryIds.push(categoryId);

    }

  }

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryIds.includes(categoryId);
  }

  onSubmit() {

    // this.feedService.setFeed({
    //   categoryIds: this.selectedCategoryIds
    // }).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   }
    // });

  }

}
