import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {HealthCheckConfigService} from './health-check-config.service';
import {HealthCheckConfig} from "../models/health-check-config.model";

@Component({
    selector: 'health-check-config',
    templateUrl: '/app/healthCheckConfig/health-check-config.view.html',
    styleUrls: ['/app/healthCheckConfig/health-check-config.styles.css'],
    providers: [HealthCheckConfigService]
})

export class HealthCheckConfigComponent implements OnInit {

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
}
