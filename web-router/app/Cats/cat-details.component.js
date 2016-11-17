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
var CatDetailsComponent = (function () {
    function CatDetailsComponent(petService, route) {
        this.petService = petService;
        this.route = route;
    }
    CatDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Active Route:" + this.route);
        // subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.petService.findPetById(id).subscribe(function (cat) { return _this.cat = cat; });
        });
    };
    CatDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CatDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cat-details',
            template: "\n\t<div *ngIf=\"cat\">\n\t\t<h2>{{cat.name.$t}}</h2>\n\t\t<img src=\"{{cat.media.photos.photo[3].$t}}\">\n\t\t<p>Age: {{cat.age.$t}}</p>\n\t\t<p>Sex: {{cat.sex.$t}}</p>\n\t\t<p>Description: {{cat.description.$t}}</p>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [pets_service_1.PetService, router_1.ActivatedRoute])
    ], CatDetailsComponent);
    return CatDetailsComponent;
}());
exports.CatDetailsComponent = CatDetailsComponent;
//# sourceMappingURL=cat-details.component.js.map