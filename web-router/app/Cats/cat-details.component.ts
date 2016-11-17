import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../pets.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'cat-details',
	template: `
	<div *ngIf="cat">
		<h2>{{cat.name.$t}}</h2>
		<img src="{{cat.media.photos.photo[3].$t}}">
		<p>Age: {{cat.age.$t}}</p>
		<p>Sex: {{cat.sex.$t}}</p>
		<p>Description: {{cat.description.$t}}</p>
	</div>
	`
})
export class CatDetailsComponent implements OnInit {
	// properties for binding
	private sub:any;
	private cat:string[];

	constructor(
		private petService: PetService,
		private route: ActivatedRoute) {}

	ngOnInit() {
		console.log("Active Route:" + this.route);
		// subscribe to route params
		this.sub = this.route.params.subscribe(params => {
			let id = params['id'];
			this.petService.findPetById(id).subscribe(cat => this.cat = cat);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}