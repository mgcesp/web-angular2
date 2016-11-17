"use strict";
var cat_list_component_1 = require('../cats/cat-list.component');
var cat_details_component_1 = require('../cats/cat-details.component');
exports.catRoutes = [
    { path: 'cats', component: cat_list_component_1.CatListComponent },
    { path: 'cats/:id', component: cat_details_component_1.CatDetailsComponent }
];
//# sourceMappingURL=cat.routes.js.map