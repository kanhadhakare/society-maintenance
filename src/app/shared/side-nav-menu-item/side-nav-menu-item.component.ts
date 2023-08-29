import { Component, Input, OnInit } from '@angular/core';
import { SideNavMenuItem } from 'src/app/model/sideNavMenuData.model';

@Component({
  selector: 'app-side-nav-menu-item',
  templateUrl: './side-nav-menu-item.component.html',
  styleUrls: ['./side-nav-menu-item.component.scss']
})
export class SideNavMenuItemComponent implements OnInit {

  @Input() menuItem!: SideNavMenuItem;
  public openSubmenu = false

  constructor() { }

  ngOnInit(): void {

  }

  public showSubmenu(event: Event): void {
    event.stopPropagation();
    this.openSubmenu = !this.openSubmenu
  }

}
