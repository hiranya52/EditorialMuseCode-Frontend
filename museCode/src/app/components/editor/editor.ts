import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-editor',
  imports: [],
  templateUrl: './editor.html',
  styleUrl: './editor.css'
})
export class Editor implements OnInit, OnDestroy {

  isBold = false;
  isItalic = false;
  isUnderline = false;
  isBulletList = false;

  @Input() title = '';
  @Input() content = '';
  @Input() coverImage: string | null = null;

  @Output() titleChange = new EventEmitter<string>();
  @Output() contentChange = new EventEmitter<string>();
  @Output() coverChange = new EventEmitter<string>();

  @ViewChild('contentEditor')
  contentEditor!: ElementRef<HTMLDivElement>;

  private selectionListener = () => {
    this.updateToolbarState();
  };

  ngOnInit(): void {
    document.addEventListener(
      'selectionchange',
      this.selectionListener
    );
  }

  ngOnDestroy(): void {
    document.removeEventListener(
      'selectionchange',
      this.selectionListener
    );
  }

  formatText(command: string, value?: string): void {

    this.contentEditor.nativeElement.focus();

    if (value) {
      document.execCommand(command, false, value);
    } else {
      document.execCommand(command, false);
    }

    this.updateToolbarState();
    this.onEditorInput();
  }

  updateToolbarState(): void {

    try {
      this.isBold =
        document.queryCommandState('bold');

      this.isItalic =
        document.queryCommandState('italic');

      this.isUnderline =
        document.queryCommandState('underline');

      this.isBulletList =
        document.queryCommandState(
          'insertUnorderedList'
        );

    } catch {
      // ignore
    }
  }

  onEditorInput(): void {
    const html =
      this.contentEditor.nativeElement.innerHTML;

    this.content = html;
    this.contentChange.emit(html);
  }

  autoResize(el: HTMLTextAreaElement): void {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }

  onTitleChange(event: Event): void {
    const value =
      (event.target as HTMLTextAreaElement).value;

    this.title = value;
    this.titleChange.emit(value);
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files?.length) {

      const file = input.files[0];
      const imageUrl =
        URL.createObjectURL(file);

      this.coverImage = imageUrl;
      this.coverChange.emit(imageUrl);
    }
  }

  get wordCount(): number {

    const text =
      this.contentEditor?.nativeElement?.innerText || '';

    return text.trim()
      ? text.trim().split(/\s+/).length
      : 0;
  }

  get readingTime(): number {
    return Math.max(
      1,
      Math.ceil(this.wordCount / 200)
    );
  }
}
