import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './services/hero.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		HeroesComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}