import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private _httpClient: HttpClient) { }

  private _selectedMenu: BehaviorSubject<any> = new BehaviorSubject(null);
  public selectedMenu$ = this._selectedMenu.asObservable();

  selectMenu(data: Object) {
    this._selectedMenu.next(data);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
