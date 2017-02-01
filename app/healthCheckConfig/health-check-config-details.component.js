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
var health_check_config_model_1 = require("../models/health-check-config.model");
var health_check_config_service_1 = require("./health-check-config.service");
var HealthCheckDetailComponent = (function () {
    function HealthCheckDetailComponent(healthCheckConfigService) {
        this.healthCheckConfigService = healthCheckConfigService;
    }
    HealthCheckDetailComponent.prototype.ngOnInit = function () {
    };
    HealthCheckDetailComponent.prototype.saveHealthCheckConfig = function (healthCheckConfig) {
        this.healthCheckConfigService.updateHealthCheckConfig(healthCheckConfig)
            .then(function (resp) {
            console.log(resp);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', health_check_config_model_1.HealthCheckConfig)
    ], HealthCheckDetailComponent.prototype, "selectedHealthCheckConfig", void 0);
    HealthCheckDetailComponent = __decorate([
        core_1.Component({
            selector: 'health-check-config-detail',
            templateUrl: '/app/healthCheckConfig/health-check-config-detail.view.html',
            providers: [health_check_config_service_1.HealthCheckConfigService]
        }), 
        __metadata('design:paramtypes', [health_check_config_service_1.HealthCheckConfigService])
    ], HealthCheckDetailComponent);
    return HealthCheckDetailComponent;
}());
exports.HealthCheckDetailComponent = HealthCheckDetailComponent;
//# sourceMappingURL=health-check-config-details.component.js.map