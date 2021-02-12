import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class ImdbApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "https://" + environment.imdbApiUrl + "/";
   }

  getMovies(name: string): Observable<any> {
    const url = this.apiUrl + "?s=" + name + "&r=json&type=movie";

    return this.http.get(url, 
      {
        headers: {
          "x-rapidapi-key": environment.imdbApiKey, 
          "x-rapidapi-host": environment.imdbApiUrl,
        }
      }).pipe(map(resp => resp));
  }
}
