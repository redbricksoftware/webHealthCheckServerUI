//import {IHealthCheckSummary} from "../../models/IHealthCheck";
"use strict";
var HealthCheckSummary //implements IHealthCheckSummary {
 = (function () {
    function HealthCheckSummary //implements IHealthCheckSummary {
        (HCS) {
        this.id = HCS.id;
        this.name = HCS.name;
        this.uri = HCS.uri;
        this.currentStatus = HCS.currentStatus;
        this.responseTimeMS = HCS.responseTimeMS;
        this.uptime24h = HCS.uptime24h;
        this.icon = HCS.icon;
        this.rowStatus = HCS.rowStatus;
    }
    HealthCheckSummary //implements IHealthCheckSummary {
    .prototype.greet = function () {
        return "Hello, " + this.id;
    };
    return HealthCheckSummary //implements IHealthCheckSummary {
    ;
}());
exports.HealthCheckSummary //implements IHealthCheckSummary {
 = HealthCheckSummary //implements IHealthCheckSummary {
;
//# sourceMappingURL=health-check-summary.js.map