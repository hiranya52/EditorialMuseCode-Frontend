import { ProfileService } from './../../service/profile/profile-service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EditProfile } from '../edit-profile/edit-profile';
import { AuthService } from '../../service/auth/auth.service';
import { Profile } from '../../../model/Profile.model';
@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, EditProfile],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
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

  showEdit = false;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {

    const userId = this.authService.getUserId();

    if (!userId) {
      console.error('User ID is null');
      return;
    }

    this.profileService.getUserProfile(userId).subscribe({
      next: (data: Profile) => {

        console.log('API Response:', data);

        this.profile = {
          id: data.id,
          userId: data.userId,
          displayName: data.displayName,
          username: data.username,
          bio: data.bio,
          profileImageUrl:
            data.profileImageUrl ||
            'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          followersCount: data.followersCount,
          followingCount: data.followingCount,
          articlesCount: data.articlesCount
        };

        console.log('Updated Profile:', this.profile);
      },

      error: (err) => {
        console.error('Profile Error:', err);
      }
    });
  }

  openEdit() {
    this.showEdit = true;
  }

  closeEdit() {
    this.showEdit = false;
  }
}
