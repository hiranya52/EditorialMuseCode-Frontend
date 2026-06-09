export interface Profile {
  id: number;
  userId: number;
  displayName: string | null;
  username: string | null;
  bio: string | null;
  profileImageUrl: string | null;
  followersCount: number;
  followingCount: number;
  articlesCount: number;
}
