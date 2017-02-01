import {Component, Input, SimpleChanges} from '@angular/core';
import {OnInit} from '@angular/core';

import {HealthCheckStatusService} from "./health-check-status.service";
import {HealthCheckStatusDetails} from "../models/health-check-status-details.model";


@Component({
    selector: 'health-check-status-detail',
    templateUrl: '/app/healthCheckStatus/health-check-status-detail.view.html',
    styleUrls: ['/app/healthCheckConfig/health-check-status.styles.css'],
    providers: [HealthCheckStatusService]
})

export class HealthCheckStatusDetailComponent implements OnInit {
    @Input()
    selectedHealthCheckStatusConfigID: number;

    constructor(private healthCheckStatusService: HealthCheckStatusService) {
    }

    ngOnInit(): void {
        console.log('id: ' + this.selectedHealthCheckStatusConfigID);
    }

    ngOnChanges(changes: SimpleChanges) {
        let property: Object;

        for (let propName in changes) {
            if (propName == 'selectedHealthCheckStatusConfigID') {
                let cur = JSON.stringify(changes[propName].currentValue);
                this.selectedHealthCheckStatusConfigID = Number(cur);
                break;
            }
            /*
             let chng = changes[propName];
             let cur = JSON.stringify(chng.currentValue);
             let prev = JSON.stringify(chng.previousValue);
             console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
             */
        }

        this.healthCheckStatusService.getHealthCheckStatusDetailByID(this.selectedHealthCheckStatusConfigID)
            .then(function (resp) {
                console.log(resp);
            })
            .catch(function (err) {
                console.error(err);
            })


    }


    healthCheckStatusDetails: HealthCheckStatusDetails[];

}
