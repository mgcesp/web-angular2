import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { DogListComponent } from './dogs/dog-list.component';
import { CatListComponent } from './cats/cat-list.component';

import { DogDetailsComponent } from './dogs/dog-details.component';
import { CatDetailsComponent } from './cats/cat-details.component';

import { PetService } from './pets.service';
import { routing } from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		routing
	],
	declarations: [
		AppComponent,
		DogListComponent,
		CatListComponent,
		DogDetailsComponent,
		CatDetailsComponent
	],
	providers: [
		PetService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}