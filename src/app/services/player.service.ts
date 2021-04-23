import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Player} from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiUrl:string = 'https://www.balldontlie.io/api/v1/players?per_page=99';

  constructor(private http:HttpClient) { }

  //Get Player
  getPlayers(name:string):Observable<any>{
    const url = `${this.apiUrl}&search=${name}`
    return this.http.get<any>(url);
  }
}
