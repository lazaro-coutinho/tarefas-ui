import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  entrar(usuario: Usuario): Observable<any> {
    const url = 'api/login';
    return this.httpClient.post<any>(url, usuario);
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date | null {
    
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;

  }

  isTokenExpired(token?: string): boolean {

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === null || date === undefined) {
      return false;
    }

    return (date.valueOf() <= new Date().valueOf());

  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if(this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
}
