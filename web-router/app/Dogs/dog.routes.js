"use strict";
var dog_list_component_1 = require('./dog-list.component');
var dog_details_component_1 = require('./dog-details.component');
exports.dogRoutes = [
    { path: 'dogs', component: dog_list_component_1.DogListComponent },
    { path: 'dogs/:id', component: dog_details_component_1.DogDetailsComponent }
];
//# sourceMappingURL=dog.routes.js.map