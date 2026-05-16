import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personalize-feed',
  imports: [CommonModule],
  templateUrl: './personalize-feed.html',
  styleUrl: './personalize-feed.css',
})
export class PersonalizeFeed {

  selectedCategories: string[] = [];

  normalClass =
    'font-label text-sm px-6 py-3 rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:border-primary/40 hover:text-primary transition-all duration-200';

  selectedClass =
    'group relative px-6 py-3 rounded-full border-2 border-primary-container bg-surface-container-lowest text-primary font-medium transition-all duration-300 shadow-[0_0_15px_rgba(3,33,33,0.15)] flex items-center gap-2';

  toggleCategory(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter((c) => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
  }

  isSelected(category: string): boolean {
    return this.selectedCategories.includes(category);
  }

  



}
