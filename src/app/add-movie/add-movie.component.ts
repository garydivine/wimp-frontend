import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movies;
  
  constructor(private wimpService: WimpService){}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.wimpService.getRecords("movies")
    .subscribe( 
      moviesFromApi => {
        this.movies = moviesFromApi;
      }
    ) 
  }

  onSubmitOfMovie(formData: NgForm) {
    console.log(formData.value);
    this.wimpService.addRecord("movies", formData.value)
    .subscribe( 
      addedMovie => {
        console.log("Added movie:" + addedMovie.title);
        this.getMovies();
        formData.reset();
      }
    ) 
  }

}
