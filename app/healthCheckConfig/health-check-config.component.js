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
var health_check_config_service_1 = require("./health-check-config.service");
var HealthCheckConfigComponent = (function () {
    function HealthCheckConfigComponent(healthCheckConfigService) {
        this.healthCheckConfigService = healthCheckConfigService;
        this.title = 'Health Check';
    }
    HealthCheckConfigComponent.prototype.ngOnInit = function () {
        this.getConfig();
    };
    HealthCheckConfigComponent.prototype.getConfig = function () {
        var _this = this;
        this.healthCheckConfigService.getHealthCheckConfig()
            .then(function (data) {
            //this.healthCheckSummarys = data;
            //this.setHealthCheckClass();
            _this.healthCheckConfigs = data;
            //TODO: remove after testing.
            _this.selectHealthCheckConfig(_this.healthCheckConfigs[0]);
        })
            .catch(function (ex) {
            //Example console.log
            console.log('Error fetching summary data:', ex);
        });
    };
    HealthCheckConfigComponent.prototype.selectHealthCheckConfig = function (healthCheckConfig) {
        /*
         this.healthCheckConfigService.getHealthCheckConfigByID(healthCheckConfig.configID)
         .then(data => {
         this.selectedHealthCheckConfig = data;
         console.log(this.selectedHealthCheckConfig);
         })
         .catch((ex) => {
         //Example console.log
         console.log('Error fetching summary data:', ex);
         });
         */
        this.selectedHealthCheckConfig = healthCheckConfig;
    };
    return HealthCheckConfigComponent;
}());
HealthCheckConfigComponent = __decorate([
    core_1.Component({
        selector: 'health-check-config',
        templateUrl: '/app/healthCheckConfig/health-check-config.view.html',
        styleUrls: ['/app/healthCheckConfig/health-check-config.styles.css'],
        providers: [health_check_config_service_1.HealthCheckConfigService]
    }),
    __metadata("design:paramtypes", [health_check_config_service_1.HealthCheckConfigService])
], HealthCheckConfigComponent);
exports.HealthCheckConfigComponent = HealthCheckConfigComponent;
//# sourceMappingURL=health-check-config.component.js.map