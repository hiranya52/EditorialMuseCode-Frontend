import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EditProfile } from "../edit-profile/edit-profile";
import { ProfileService } from '../../service/profile/profile-service';
@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, EditProfile],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit{

  private profileService = inject(ProfileService);

  ngOnInit(): void {

    this.profileService.getUserProfile(16).subscribe({
      next: (data) => {
        console.log(data);
      },

      error: (err) => {
        console.log(err);
      }
    });
  }

  showEdit = false;

  openEdit() {
    this.showEdit = true;
  }

  closeEdit() {
    this.showEdit = false;
  }


}
