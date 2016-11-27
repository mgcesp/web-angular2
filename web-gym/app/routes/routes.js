"use strict";
var router_1 = require('@angular/router');
var log_component_1 = require('../views/log.component');
var log_weight_component_1 = require('../views/log-weight.component');
var log_reps_component_1 = require('../views/log-reps.component');
var journal_component_1 = require('../views/journal.component');
var history_component_1 = require('../views/history.component');
exports.routes = [
    { path: '', redirectTo: 'log', pathMatch: 'full' },
    { path: 'history', component: history_component_1.HistoryComponent },
    { path: 'log', component: log_component_1.LogComponent,
        children: [
            { path: '', redirectTo: 'reps', pathMatch: 'full' },
            { path: 'weight', component: log_weight_component_1.LogWeightComponent },
            { path: 'reps', component: log_reps_component_1.LogRepsComponent },
        ] },
    { path: 'journal', component: journal_component_1.JournalComponent }
];
exports.Routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.js.map