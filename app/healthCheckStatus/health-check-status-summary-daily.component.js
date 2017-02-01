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
var HealthCheckStatusSummaryDailyComponent = (function () {
    function HealthCheckStatusSummaryDailyComponent(healthCheckStatusService) {
        this.healthCheckStatusService = healthCheckStatusService;
        this.title = 'Health Check';
    }
    HealthCheckStatusSummaryDailyComponent.prototype.ngOnInit = function () {
        this.getConfig();
    };
    HealthCheckStatusSummaryDailyComponent.prototype.getConfig = function () {
        var _this = this;
        this.healthCheckStatusService.getHealthCheckStatusSummaryDaily()
            .then(function (data) {
            //this.healthCheckSummarys = data;
            //this.setHealthCheckClass();
            _this.healthCheckStatusSummaryDailys = data;
            console.log(data);
            //TODO: remove after testing.
            //this.selecthealthCheckStatusSummaryDaily(this.healthCheckStatusSummaryDailys[0]);
        })
            .catch(function (ex) {
            //Example console.log
            console.log('Error fetching summary data:', ex);
        });
    };
    HealthCheckStatusSummaryDailyComponent.prototype.selecthealthCheckStatusSummaryDaily = function (healthCheckStatusSummaryDaily) {
        /*
         this.healthCheckStatusService.getHealthCheckStatusDetailByID(1)
         .then(data => {
         //this.healthCheckSummarys = data;
         //this.setHealthCheckClass();
         //this.healthCheckStatusSummaryDailys = data;

         console.log(data);

         //TODO: remove after testing.
         this.selecthealthCheckStatusSummaryDaily(this.healthCheckStatusSummaryDailys[0]);
         })
         .catch((ex) => {
         //Example console.log
         console.log('Error fetching summary data:', ex);
         });
         this.selectedHealthCheckStatusSummaryDaily = healthCheckStatusSummaryDaily;
         */
        this.selectedHealthCheckStatusConfigID = healthCheckStatusSummaryDaily.configID;
    };
    return HealthCheckStatusSummaryDailyComponent;
}());
HealthCheckStatusSummaryDailyComponent = __decorate([
    core_1.Component({
        selector: 'health-check-status-summary-daily',
        templateUrl: '/app/healthCheckStatus/health-check-status-summary-daily.view.html',
        styleUrls: ['/app/healthCheckConfig/health-check-status.styles.css'],
        providers: [health_check_status_service_1.HealthCheckStatusService]
    }),
    __metadata("design:paramtypes", [health_check_status_service_1.HealthCheckStatusService])
], HealthCheckStatusSummaryDailyComponent);
exports.HealthCheckStatusSummaryDailyComponent = HealthCheckStatusSummaryDailyComponent;
//# sourceMappingURL=health-check-status-summary-daily.component.js.map