import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'auth';

  constructor(private tokenService: TokenService,
    private http: HttpClient) { }

   register(user: User): Observable<any> { 
    const url = this.baseUrl + '/register';
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,user,{headers}).pipe(tap(response=>{
      if (response.token){
        this.tokenService.set(response.token);
      }
    }));

  }
  login(username: String, password: String): Observable<any> {
    const url = `${this.baseUrl}/login?username=${username}&password=${password}`;

    return this.http.get(url).pipe(tap(response=>{
      if (response.token){
        this.tokenService.set(response.token);
      }
    }));



  }


  logout() {
    this.tokenService.clear();

  }
}
