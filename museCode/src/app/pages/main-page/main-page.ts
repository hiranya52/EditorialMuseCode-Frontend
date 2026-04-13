import { Component } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Navbar } from "../../components/navbar/navbar";
import { MobileNav } from "../../components/mobile-nav/mobile-nav";
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";


@Component({
  selector: 'app-main-page',
  imports: [Sidebar, Navbar, MobileNav, RouterOutlet],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
