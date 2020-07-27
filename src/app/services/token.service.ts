import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  keyName: string = 'access_token';
  constructor() { }


  get() {
    return localStorage.getItem(this.keyName);
  }

  clear(){
    localStorage.removeItem(this.keyName);
  }

  getDecodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.log(error);
    }
  }

  wrap(token) {
    const payload = this.getDecodeToken(token);

    return JSON.stringify({
      name: 'jwt',
      createdAt: new Date (payload.iat * 1000),
      expire: new Date(payload.exp * 1000),
      value: token,
    });
  }

  set(token:string){
    localStorage.setItem(this.keyName,this.wrap(token));
  }


}
