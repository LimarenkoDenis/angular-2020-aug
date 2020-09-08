import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isAuthorized(): Observable<boolean> {
    return of(localStorage.getItem('authorized') === 'true');
  }

  logIn(): void {
    localStorage.setItem('authorized', 'true');
  }

  logout(): void {
    localStorage.removeItem('authorized');
  }
}
