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
var pets_service_1 = require('../pets.service');
var router_1 = require('@angular/router');
var DogDetailsComponent = (function () {
    function DogDetailsComponent(petService, route) {
        this.petService = petService;
        this.route = route;
    }
    // Load data once component is ready
    DogDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Active Route:" + this.route);
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            // Retrieve pet with id route param
            _this.petService.findPetById(id).subscribe(function (dog) { return _this.dog = dog; });
        });
    };
    DogDetailsComponent.prototype.ngOnDestroy = function () {
        // Clean subscribe to avoid memory leak
        this.sub.unsubscribe();
    };
    DogDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dog-details',
            template: "\n  <div *ngIf=\"dog\">\n    <h2>{{dog.name.$t}}</h2>\n    <img src=\"{{dog.media.photos.photo[3].$t}}\">\n    <p>Age: {{dog.age.$t}}</p>\n    <p>Sex: {{dog.sex.$t}}</p>\n    <p>Description: {{dog.description.$t}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [pets_service_1.PetService, router_1.ActivatedRoute])
    ], DogDetailsComponent);
    return DogDetailsComponent;
}());
exports.DogDetailsComponent = DogDetailsComponent;
//# sourceMappingURL=dog-details.component.js.map