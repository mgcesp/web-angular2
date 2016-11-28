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
var tasks_service_1 = require('../services/tasks.service');
var task_1 = require('./task');
var TaskListComponent = (function () {
    function TaskListComponent(ts) {
        this.ts = ts;
        this.tasks = this.ts.tasks;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.activeTask = new task_1.Task('bench press', 5);
        // this.activeTask = null;
    };
    TaskListComponent.prototype.select = function (task) {
        this.activeTask = task;
    };
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-list',
            template: "\n\t\t<ul>\n\t\t\t<li *ngFor=\"let task of tasks\">\n\t\t\t\t{{task.name}}\n\t\t\t\t<button (click)=select(task)>SELECT</button>\n\t\t\t</li>\n\t\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map