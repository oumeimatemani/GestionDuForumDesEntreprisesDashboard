import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Event',  icon:' bubble_chart', class: '' },
    { path: '/typography', title: 'Forum',  icon:'content_paste', class: '' },
    { path: '/icons', title: 'Blog',  icon:'library_books ', class: '' },
    { path: '/maps', title: 'System Rep',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Innovation',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'SITEWEB',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
