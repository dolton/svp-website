import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Router } from '@angular/router';
import * as data from '../../../assets/json/menu/menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private _router: Router
  ) { }

  menuList: Array<Object> = (data as any).default;

  ngOnInit(): void {
  }

  onMenuSelection(menu: Object) {
    if (menu && menu['childrenList'].length == 0) {
      this._router.navigate([menu['route']]);
    }
  }
}
