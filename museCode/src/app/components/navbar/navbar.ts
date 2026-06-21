import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile-service';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private authService: AuthService, private profileService: ProfileService) {}

  ngOnInit() {
    const userId = this.authService.getUserId();

    // if (userId) {
    //   this.profileService.getUserProfile(userId).subscribe(res => {
    //     // console.log(userId);

    //     console.log(res);
    //   });
    // }
  }


  profileImageUrl: string = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1yRc51jYOfI4pci7wLsRLBZ2h6CHzPvuh0N1qCtf-px58wyuNSn_f08hGaSBWUa1pEBX3vPbiGOt3HdyxyzTStnMEQOQuaaBV1I9kbILKoeV5WRcvA4SZwsQmlKyk6HpQx9QchFqULNmrx-mE9MrGYoeDdn6W-gi2BvqFrRcZhPPG-0BPBsS-xpF3UJxLGJwqyENQ2Y3npMfaGTUjZH19OmeboeDZE_hgQJ66P8goDQJzNFvMb5_pCmN34HVDHybVtKq20Zohpt4';



}
