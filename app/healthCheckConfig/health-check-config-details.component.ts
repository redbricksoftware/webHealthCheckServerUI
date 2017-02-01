import {Component, Input} from '@angular/core';
import {OnInit} from '@angular/core';

import {HealthCheckConfig} from "../models/health-check-config.model";
import {HealthCheckConfigService} from "./health-check-config.service";


@Component({
    selector: 'health-check-config-detail',
    templateUrl: '/app/healthCheckConfig/health-check-config-detail.view.html',
    providers: [HealthCheckConfigService]
})

export class HealthCheckDetailComponent implements OnInit {
    @Input()
    selectedHealthCheckConfig: HealthCheckConfig;

    constructor(private healthCheckConfigService: HealthCheckConfigService) {
    }

    ngOnInit(): void {
    }

    saveHealthCheckConfig(healthCheckConfig: HealthCheckConfig): void {
        this.healthCheckConfigService.updateHealthCheckConfig(healthCheckConfig)
            .then(function(resp){
                console.log(resp);
            })
            .catch(function(err){
                console.log(err);
            })
    }
}