import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Navbar } from "../../components/navbar/navbar";
import { MobileNav } from "../../components/mobile-nav/mobile-nav";


@Component({
  selector: 'app-main-page',
  imports: [Sidebar, Navbar, MobileNav, RouterOutlet],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
