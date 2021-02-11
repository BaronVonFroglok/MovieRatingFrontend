import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private id: number = 0;

  /*PLEASE NOTE HARDCODED USER ID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  private getPortfoliosUrl: string = "http://localhost:8200/service/getPortfolios/";
  //bug fix adding base url 1/1 
  private baseUrl: string ="http://localhost:8200/service";

  constructor(private http: HttpClient) {}
  setId(id: number){
    this.id = id;
    }

  
  //bug fix team adding get user function 1/1
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserById/${id}`);

  }
}
