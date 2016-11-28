import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// import { ChildComponent } from './inputs-and-outputs/child.component';
// import { ParentComponent } from './inputs-and-outputs/parent.component';

import { ChildComponent } from './child.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		ChildComponent
		// ParentComponent,
		// ChildComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}