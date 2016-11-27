import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// VIEWS
import { LogComponent } from './views/log.component';
import { LogWeightComponent } from './views/log-weight.component';
import { LogRepsComponent } from './views/log-reps.component';
import { HistoryComponent } from './views/history.component';
import { JournalComponent } from './views/journal.component';

import { TaskListComponent } from './tasks/task-list.component';

import { TasksService } from './services/tasks.service';
import { Task } from './tasks/task';

import { Routing } from './routes/routes';

@NgModule({
	imports: [
		BrowserModule,
		Routing
	],
	declarations: [
		AppComponent,
		LogComponent,
		LogWeightComponent,
		LogRepsComponent,
		HistoryComponent,
		JournalComponent,
		TaskListComponent
	],
	providers: [
		TasksService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}