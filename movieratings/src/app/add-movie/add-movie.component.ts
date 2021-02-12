import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Movie } from 'src/models/movie';
import { Rating } from 'src/models/rating';
import { ImdbApiService } from '../imdb-api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  searchQuery: string;
  searchResults: Movie[];
  querySent: boolean;
  selectedMovie: number[];

  constructor(private imdbApiService: ImdbApiService) { 
    this.searchQuery = "";
    this.searchResults = []; 
    this.selectedMovie = [];
  }

  ngOnInit(): void {
  }

  searchMovie(): void {
    this.searchResults = [];
    this.selectedMovie = [];
    this.querySent = true;
    this.imdbApiService.getMovies(this.searchQuery).subscribe(
      resp => {
        if (resp.Response == "False") this.searchResults = [];
        else {
          for (let result of resp.Search) {
            let movie:Movie = new Movie;
            movie.id = 0;
            movie.title = result.Title;
            movie.year = result.Year;
            movie.imdb_id = result.imdbID;
            movie.poster = result.Poster;
            this.searchResults.push(movie);
            this.selectedMovie.push(0);
          }
        }
      }
    );
  }

  rateMovie(movie: Movie): void {
    let rating = new Rating;
    rating.id = 0; // assigned after persisted in db
    rating.movie_id = 0; // assigned after new movie persisted in db
    rating.person_id = 0; // get form the logged user user.id
    rating.score = this.selectedMovie[this.searchResults.indexOf(movie)];
  }

}
