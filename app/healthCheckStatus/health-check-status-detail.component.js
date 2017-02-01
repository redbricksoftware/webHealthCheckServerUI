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
var core_1 = require("@angular/core");
var health_check_status_service_1 = require("./health-check-status.service");
var HealthCheckStatusDetailComponent = (function () {
    function HealthCheckStatusDetailComponent(healthCheckStatusService) {
        this.healthCheckStatusService = healthCheckStatusService;
    }
    HealthCheckStatusDetailComponent.prototype.ngOnInit = function () {
        console.log('id: ' + this.selectedHealthCheckStatusConfigID);
    };
    HealthCheckStatusDetailComponent.prototype.ngOnChanges = function (changes) {
        var property;
        for (var propName in changes) {
            if (propName == 'selectedHealthCheckStatusConfigID') {
                var cur = JSON.stringify(changes[propName].currentValue);
                this.selectedHealthCheckStatusConfigID = Number(cur);
                break;
            }
        }
        this.healthCheckStatusService.getHealthCheckStatusDetailByID(this.selectedHealthCheckStatusConfigID)
            .then(function (resp) {
            console.log(resp);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    return HealthCheckStatusDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], HealthCheckStatusDetailComponent.prototype, "selectedHealthCheckStatusConfigID", void 0);
HealthCheckStatusDetailComponent = __decorate([
    core_1.Component({
        selector: 'health-check-status-detail',
        templateUrl: '/app/healthCheckStatus/health-check-status-detail.view.html',
        styleUrls: ['/app/healthCheckConfig/health-check-status.styles.css'],
        providers: [health_check_status_service_1.HealthCheckStatusService]
    }),
    __metadata("design:paramtypes", [health_check_status_service_1.HealthCheckStatusService])
], HealthCheckStatusDetailComponent);
exports.HealthCheckStatusDetailComponent = HealthCheckStatusDetailComponent;
//# sourceMappingURL=health-check-status-detail.component.js.map