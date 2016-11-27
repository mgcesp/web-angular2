"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
// VIEWS
var log_component_1 = require('./views/log.component');
var log_weight_component_1 = require('./views/log-weight.component');
var log_reps_component_1 = require('./views/log-reps.component');
var history_component_1 = require('./views/history.component');
var journal_component_1 = require('./views/journal.component');
var task_list_component_1 = require('./tasks/task-list.component');
var tasks_service_1 = require('./services/tasks.service');
var routes_1 = require('./routes/routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routes_1.Routing
            ],
            declarations: [
                app_component_1.AppComponent,
                log_component_1.LogComponent,
                log_weight_component_1.LogWeightComponent,
                log_reps_component_1.LogRepsComponent,
                history_component_1.HistoryComponent,
                journal_component_1.JournalComponent,
                task_list_component_1.TaskListComponent
            ],
            providers: [
                tasks_service_1.TasksService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map