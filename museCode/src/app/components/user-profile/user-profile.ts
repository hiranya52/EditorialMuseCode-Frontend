import { ProfileService } from './../../service/profile/profile-service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EditProfile } from "../edit-profile/edit-profile";
import { AuthService } from '../../service/auth/auth.service';
import { Profile } from '../../../model/Profile.model';
@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, EditProfile],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit{

  profile: Profile = {
    id: 0,
    userId: 0,
    displayName: null,
    username: null,
    bio: null,
    profileImageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    followersCount: 0,
    followingCount: 0,
    articlesCount: 0
  };

  constructor(private authService: AuthService, private profileService: ProfileService) {}

  ngOnInit(): void {

    const userId = this.authService.getUserId();

    if (userId == null) {
      console.error('User ID is null');
      return;
    }

    // this.profileService.getUserProfile(userId).subscribe({
    //   next: (data) => {
    //     this.profile = data as Profile;
    //     console.log(this.profile);
    //   },

    //   error: (err) => {
    //     console.log(err);
    //   }
    // });

    this.profileService.getUserProfile(userId).subscribe({
      next: (data: Profile) => {
        console.log('API Response:', data);

        this.profile = {
          ...data,
          profileImageUrl:
            data.profileImageUrl ||
            'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        };

        console.log('Updated Profile:', this.profile);
      },
      error: (err) => {
        console.error('Profile Error:', err);
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
