import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Editor } from "../../components/editor/editor";

@Component({
  selector: 'app-write-page',
  imports: [Editor],
  templateUrl: './write-page.html',
  styleUrl: './write-page.css',
})
export class WritePage {

  title: string = '';
  content: string = '';
  coverImage: string | null = null;

  updateTitle(value: string) {
    this.title = value;
  }

  updateContent(value: string) {
    this.content = value;
  }

  updateCover(image: string) {
    this.coverImage = image;
  }

}
