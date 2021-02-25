import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';
import * as data from './menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private _router: Router,
    private _navbarService: NavbarService
  ) { }

  menuList: Array<Object> = (data as any).default;

  ngOnInit(): void {
  }

  onMenuSelection(menu: Object) {
    if (menu && menu['childrenList'].length == 0) {
      this.emitSelectedMenu(menu);
    }
  }

  private emitSelectedMenu(menu: Object) {
    this._navbarService.selectMenu(menu);
    this._router.navigate(['/web']);
  }
}
