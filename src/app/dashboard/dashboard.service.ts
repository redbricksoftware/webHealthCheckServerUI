import {Injectable} from '@angular/core';
import {HealthCheckSummaryModel} from '../../models/healthCheckSummaryModel';
import {Http} from '@angular/http';

import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';
import {HealthCheckDetailModel} from '../../models/healthCheckDetailModel';

@Injectable()
export class DashboardService {
  private webHealthCheckBaseURI = 'http://localhost:3000/api/v1/';
  private headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  };

  getHealthCheckSummaryDataLastXDays(days: number): Promise<Array<HealthCheckSummaryModel>> {
    const xDaysAgo = moment().add((-1 * days), 'days');

    return this.http.get(this.webHealthCheckBaseURI + 'healthCheckSummary?startDate=' + xDaysAgo)
      .toPromise()
      .then(response => response.json() as Array<HealthCheckSummaryModel>)
      .catch(this.handleError);
  };

  getHealthCheckDetailLastXHours(hours: number): Promise<Array<HealthCheckDetailModel>> {
    const xHoursAgo = moment().add((-1 * hours), 'hours');


    return this.http.get(this.webHealthCheckBaseURI + 'healthCheckDetail?startDate=' + xHoursAgo)
      .toPromise()
      .then(response => response.json() as Array<HealthCheckDetailModel>)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };


}
