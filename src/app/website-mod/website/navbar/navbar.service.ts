import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  private _selectedMenu: BehaviorSubject<any> = new BehaviorSubject(null);
  public selectedMenu$ = this._selectedMenu.asObservable();

  selectMenu(data: Object) {
    this._selectedMenu.next(data);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
