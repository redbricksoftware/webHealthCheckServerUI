import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {HealthCheckStatusService} from "./health-check-status.service";
import {HealthCheckStatusSummaryDaily} from "../models/health-check-status-summary-daily.model";

import {HealthCheckStatusDetailComponent} from "./health-check-status-detail.component";


@Component({
    selector: 'health-check-status-summary-daily',
    templateUrl: '/app/healthCheckStatus/health-check-status-summary-daily.view.html',
    styleUrls: ['/app/healthCheckConfig/health-check-status.styles.css'],
    providers: [HealthCheckStatusService]
})

export class HealthCheckStatusSummaryDailyComponent implements OnInit {

    constructor(private healthCheckStatusService: HealthCheckStatusService) {
    }

    ngOnInit(): void {
        this.getConfig();
    }

    title = 'Health Check';

    healthCheckStatusSummaryDailys: HealthCheckStatusSummaryDaily[];
    //selectedHealthCheckStatusSummaryDaily: HealthCheckStatusSummaryDaily;
    selectedHealthCheckStatusConfigID: number;

    getConfig(): void {
        this.healthCheckStatusService.getHealthCheckStatusSummaryDaily()
            .then(data => {
                //this.healthCheckSummarys = data;
                //this.setHealthCheckClass();
                this.healthCheckStatusSummaryDailys = data;

                console.log(data);

                //TODO: remove after testing.
                //this.selecthealthCheckStatusSummaryDaily(this.healthCheckStatusSummaryDailys[0]);
            })
            .catch((ex) => {
                //Example console.log
                console.log('Error fetching summary data:', ex);
            });
    }

    selecthealthCheckStatusSummaryDaily(healthCheckStatusSummaryDaily: HealthCheckStatusSummaryDaily): void {

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

    }
}
