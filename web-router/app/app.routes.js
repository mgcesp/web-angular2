"use strict";
var router_1 = require('@angular/router');
var dog_routes_1 = require('./dogs/dog.routes');
var cat_routes_1 = require('./cats/cat.routes');
exports.routes = [
    { path: '', redirectTo: '/dogs', pathMatch: 'full' }
].concat(dog_routes_1.dogRoutes, cat_routes_1.catRoutes, [
    { path: '**', redirectTo: '/dogs', pathMatch: 'full' }
]);
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map