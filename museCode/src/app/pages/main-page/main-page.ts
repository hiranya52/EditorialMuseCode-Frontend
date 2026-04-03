import { Component } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Navbar } from "../../components/navbar/navbar";
import { Feed } from "../../components/feed/feed";
import { Footer } from "../../components/footer/footer";
import { MobileNav } from "../../components/mobile-nav/mobile-nav";

@Component({
  selector: 'app-main-page',
  imports: [Sidebar, Navbar, Feed, Footer, MobileNav],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
