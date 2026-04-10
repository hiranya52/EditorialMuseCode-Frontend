import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  imports: [],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
})
export class Editor {

  @Input() title!: string;
  @Input() content!: string;
  @Input() coverImage!: string | null;

  @Output() titleChange = new EventEmitter<string>();
  @Output() contentChange = new EventEmitter<string>();
  @Output() coverChange = new EventEmitter<string>();

  onTitleChange(event: any) {
    this.titleChange.emit(event.target.value);
  }

  onContentChange(event: any) {
    this.contentChange.emit(event.target.value);
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      this.coverChange.emit(url);
    }
  }

  get wordCount(): number {
    return this.content?.trim().split(/\s+/).length || 0;
  }

  get readingTime(): number {
    return Math.ceil(this.wordCount / 200);
  }
}

