import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
