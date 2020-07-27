import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = environment.apiUrl + 'note';
  constructor(private http: HttpClient) { }


  getNotes(): Observable<any> {
    return this.http.get(this.baseUrl);
  }



}
