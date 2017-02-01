import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {HealthCheckConfigService} from './healthCheckConfig/health-check-config.service';
import {HealthCheckConfig} from "./models/health-check-config.model";


@Component({
    selector: 'HealthCheck',
    templateUrl: 'app/app.view.html',
    styleUrls: ['app/app.styles.css'],
    providers: [HealthCheckConfigService]
})
export class AppComponent implements OnInit {

    constructor(private healthCheckConfigService: HealthCheckConfigService) {
    }

    ngOnInit(): void {
        this.getConfig();
    }

    title = 'Health Check';

    healthCheckConfigs: HealthCheckConfig[];
    selectedHealthCheckConfig: HealthCheckConfig;

    getConfig(): void {
        this.healthCheckConfigService.getHealthCheckConfig()
            .then(data => {
                //this.healthCheckSummarys = data;
                //this.setHealthCheckClass();
                this.healthCheckConfigs = data;

                //TODO: remove after testing.
                this.selectHealthCheckConfig(this.healthCheckConfigs[0]);
            })
            .catch((ex) => {
                //Example console.log
                console.log('Error fetching summary data:', ex);
            });
    }

    selectHealthCheckConfig(healthCheckConfig: HealthCheckConfig): void {
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

    }

    /*
     setHealthCheckClass(): void {

     let listHCS: HealthCheckSummary[] = [];

     for (let i = 0; i < this.healthCheckSummarys.length; i++) {

     listHCS[i] = new HealthCheckSummary(this.healthCheckSummarys[i]);

     switch (this.healthCheckSummarys[i].currentStatus) {
     case 'operational':
     this.healthCheckSummarys[i].icon = 'images/success.png';
     this.healthCheckSummarys[i].rowStatus = 'success';
     break;
     case 'degraded':
     this.healthCheckSummarys[i].icon = 'images/warning.png';
     this.healthCheckSummarys[i].rowStatus = 'warning';
     break;
     case 'unknown':
     this.healthCheckSummarys[i].icon = 'images/info.png';
     this.healthCheckSummarys[i].rowStatus = 'info';
     break;
     default:
     this.healthCheckSummarys[i].icon = 'images/error.png';
     this.healthCheckSummarys[i].rowStatus = 'danger';
     break;
     }

     }

     console.log(listHCS[1].greet());
     }

     setHealthCheckDetailStatus(): void {
     for (let i = 0; i < this.selectedHealthCheckDetail.statusHistory.length; i++) {
     switch (this.selectedHealthCheckDetail.statusHistory[i].status) {
     case 'operational':
     this.selectedHealthCheckDetail.statusHistory[i].icon = 'images/success.png';
     break;
     case 'degraded':
     this.selectedHealthCheckDetail.statusHistory[i].icon = 'images/warning.png';
     break;
     case 'unknown':
     this.selectedHealthCheckDetail.statusHistory[i].icon = 'images/info.png';
     break;
     default:
     this.selectedHealthCheckDetail.statusHistory[i].icon = 'images/error.png';
     break;
     }
     }
     }
     */

    //healthCheckSummary: HealthCheckSummary;

    //healthCheckDetails: HealthCheckDetail[];
    //healthCheckSummarys: HealthCheckSummary[];

    //selectedHealthCheckDetail: HealthCheckDetail;


}
