import {Injectable} from '@angular/core';
import {Headers, Http, HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {HealthCheckStatusSummaryDaily} from "../models/health-check-status-summary-daily.model";

@Injectable()
export class HealthCheckStatusService {

    private healthCheckURI = 'http://localhost:3000/api/v1/';  // URL to web api
    private headers = new Headers();

    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    getHealthCheckStatusSummaryDaily(): Promise<HealthCheckStatusSummaryDaily[]> {
        return this.http.get(this.healthCheckURI + 'HealthCheckSummaryDaily')
            .toPromise()
            .then(response => response.json() as HealthCheckStatusSummaryDaily[])
            .catch(this.handleError);
    }

    getHealthCheckStatusDetailByID(id: number): Promise<HealthCheckStatusSummaryDaily> {
        return this.http.get(this.healthCheckURI + 'HealthCheckDetails/' + id)
            .toPromise()
            .then(response => response.json() as HealthCheckStatusSummaryDaily)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
