import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  actors;

  constructor(private wimpService: WimpService){}

  ngOnInit() {
    this.getActors();
  }

  getActors() {
    this.wimpService.getRecords("actors")
    .subscribe( 
      actorsFromApi => {
        this.actors = actorsFromApi;
      }
    ) 
  }

  onSubmitOfActor(formData: NgForm) {
    console.log(formData.value);
    this.wimpService.addRecord("actors", formData.value)
    .subscribe( 
      addedActor => {
        console.log("Added actor:" + addedActor.firstName + " " + addedActor.lastName);
        this.getActors();
        formData.reset();
      }
    ) 
  }

}
