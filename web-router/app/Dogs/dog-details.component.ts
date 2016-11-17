import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../pets.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dog-details',
  template: `
  <div *ngIf="dog">
    <h2>{{dog.name.$t}}</h2>
    <img src="{{dog.media.photos.photo[3].$t}}">
    <p>Age: {{dog.age.$t}}</p>
    <p>Sex: {{dog.sex.$t}}</p>
    <p>Description: {{dog.description.$t}}</p>
  </div>
  `
})
export class DogDetailsComponent implements OnInit {
  // Private properties for binding
  private sub:any;
  private dog:string[];

  constructor(
    private petService: PetService,
    private route: ActivatedRoute) { }
  // Load data once component is ready
  ngOnInit() { 
    console.log("Active Route:" + this.route);
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      // Retrieve pet with id route param
      this.petService.findPetById(id).subscribe(dog => this.dog = dog);
    });
  }

  ngOnDestroy() {
    // Clean subscribe to avoid memory leak
    this.sub.unsubscribe();
  }
}