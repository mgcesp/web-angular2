import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Passing Data
import { ChildComponent } from './passing-data/child.component';
import { ParentComponent } from './passing-data/parent.component';


@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		ChildComponent,
		ParentComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {}