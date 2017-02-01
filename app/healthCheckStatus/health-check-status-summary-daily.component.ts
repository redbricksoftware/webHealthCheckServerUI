import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {HealthCheckStatusSummaryDailyService} from "./health-check-status-summary-daily.service";
import {HealthCheckStatusSummaryDaily} from "../models/health-check-status-summary-daily.model";

@Component({
    selector: 'health-check-status-summary-daily',
    templateUrl: '/app/healthCheckStatus/health-check-status-summary-daily.view.html',
    styleUrls: ['/app/healthCheckConfig/health-check-status.styles.css'],
    providers: [HealthCheckStatusSummaryDailyService]
})

export class HealthCheckStatusSummaryDailyComponent implements OnInit {

    constructor(private healthCheckStatusSummaryDailyService: HealthCheckStatusSummaryDailyService) {
    }

    ngOnInit(): void {
        this.getConfig();
    }

    title = 'Health Check';

    healthCheckStatusSummaryDailys: HealthCheckStatusSummaryDaily[];
    selectedHealthCheckStatusSummaryDaily: HealthCheckStatusSummaryDaily;

    getConfig(): void {
        this.healthCheckStatusSummaryDailyService.getHealthCheckConfig()
            .then(data => {
                //this.healthCheckSummarys = data;
                //this.setHealthCheckClass();
                this.healthCheckStatusSummaryDailys = data;

                console.log(data);

                //TODO: remove after testing.
                this.selectHealthCheckConfig(this.healthCheckStatusSummaryDailys[0]);
            })
            .catch((ex) => {
                //Example console.log
                console.log('Error fetching summary data:', ex);
            });
    }

    selectHealthCheckConfig(healthCheckStatusSummaryDaily: HealthCheckStatusSummaryDaily): void {

        this.selectedHealthCheckStatusSummaryDaily = healthCheckStatusSummaryDaily;

    }
}
