import {Component, Input} from '@angular/core';
import {HealthCheckSummary} from './health-check-summary';
import {HealthCheckDetail} from "./health-check-detail";

@Component({
    selector: 'config',
    templateUrl: '/app/config/health-check-config.view.html'
})

export class HealthCheckComponent {
    @Input()
    healthCheckSummary: HealthCheckSummary;
    @Input()
    selectedHealthCheckDetail: HealthCheckDetail;
}