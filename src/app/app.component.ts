import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { WimpService } from './wimp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies;
  actors;

  constructor(private wimpService: WimpService){}

  ngOnInit() {
    this.getMovies();
    this.getActors();
  }

  getMovies() {
    this.wimpService.getRecords("movies")
    .subscribe( 
      moviesFromApi => {
        this.movies = moviesFromApi;
      }
    ) 
  }

  getActors() {
    this.wimpService.getRecords("actors")
    .subscribe( 
      actorsFromApi => {
        this.actors = actorsFromApi;
      }
    ) 
  }

  onSubmitOfMovie(formData: NgForm) {
    console.log(formData.value);
    this.wimpService.addRecord("movies", formData.value)
    .subscribe( 
      addedMovie => {
        console.log("Added movie:" + addedMovie);
        this.getMovies(); 
      }
    ) 
  }

  onSubmitOfActor(formData: NgForm) {
    console.log(formData.value);
    this.wimpService.addRecord("actors", formData.value)
    .subscribe( 
      addedActor => {
        console.log("Added actor:" + addedActor);
        this.getActors;
      }
    ) 
  }
}
