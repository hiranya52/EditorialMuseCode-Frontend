import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditProfile } from "../edit-profile/edit-profile";
@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, EditProfile],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

  showEdit = false;

  openEdit() {
    this.showEdit = true;
  }

}
