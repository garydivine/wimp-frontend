import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { WimpService } from './wimp.service';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddActorComponent } from './add-actor/add-actor.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AddActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WimpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
