import {Injectable} from '@angular/core';
import {Headers, Http, HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {HealthCheckConfig} from "../models/health-check-config.model";

@Injectable()
export class HealthCheckConfigService {

    private healthCheckURI = 'http://localhost:3000/api/v1/';  // URL to web api
    private headers = new Headers();

    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    getHealthCheckConfig(): Promise<HealthCheckConfig[]> {
        return this.http.get(this.healthCheckURI + 'HealthCheckManagement')
            .toPromise()
            .then(response => response.json() as HealthCheckConfig[])
            .catch(this.handleError);
    }

    getHealthCheckConfigByID(id: number): Promise<HealthCheckConfig> {
        return this.http.get(this.healthCheckURI + 'HealthCheckManagement/' + id)
            .toPromise()
            .then(response => response.json() as HealthCheckConfig[])
            .catch(this.handleError);
    }

    addHealthCheckConfig(config: HealthCheckConfig): Promise<HealthCheckConfig> {
        return this.http.post(this.healthCheckURI + 'HealthCheckManagement/', config)
            .toPromise()
            .then(response => response.json() as HealthCheckConfig[])
            .catch(this.handleError);
    }

    updateHealthCheckConfig(config: HealthCheckConfig): Promise<HealthCheckConfig> {
        console.log('this: ' + JSON.stringify(config));
        console.log(this.headers);
        let uri = this.healthCheckURI + 'HealthCheckManagement/' + config.configID;
        return this.http.put(uri, config, {headers: this.headers})
            .toPromise()
            .then(response => response.json() as HealthCheckConfig[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
