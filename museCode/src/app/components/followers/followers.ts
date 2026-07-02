import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { ProfileService } from '../../service/profile/profile-service';
import { Profile } from '../../../model/Profile.model';

@Component({
  selector: 'app-followers',
  imports: [],
  templateUrl: './followers.html',
  styleUrl: './followers.css',
})
export class Followers {
  profile: Profile = {
    id: 0,
    userId: 0,
    displayName: null,
    username: null,
    bio: 'Sharing thoughts and stories.',
    profileImageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    followersCount: 0,
    followingCount: 0,
    articlesCount: 0,
  };

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
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
          data.profileImageUrl || 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          followersCount: data.followersCount,
          followingCount: data.followingCount,
          articlesCount: data.articlesCount,
        };

        console.log('Updated Profile:', this.profile);
      },

      error: (err) => {
        console.error('Profile Error:', err);
      },
    });
  }
}
