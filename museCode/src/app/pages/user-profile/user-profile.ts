import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";

@Component({
  selector: 'app-user-profile',
  imports: [Navbar, Sidebar],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {}
