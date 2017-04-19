import {Injectable} from '@angular/core';
import {HealthCheckSummaryModel} from '../../models/healthCheckSummaryModel';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {HealthCheckDetailModel} from '../../models/healthCheckDetailModel';

@Injectable()
export class DashboardService {
  private webHealthCheckBaseURI = 'http://localhost:3000/api/v1/';
  private headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  };

  getHealthCheckSummaryDataLastSevenDays(): Promise<Array<HealthCheckSummaryModel>> {
    return this.http.get(this.webHealthCheckBaseURI + 'healthCheckSummary?startDate=' + Date().toString())
      .toPromise()
      .then(response => response.json() as Array<HealthCheckSummaryModel>)
      .catch(this.handleError);
  };

  getHealthCheckDetailLast24Hours(): Promise<HealthCheckDetailModel> {
    return this.http.get(this.webHealthCheckBaseURI + 'healthCheckDetail?startDate=' + Date().toString())
      .toPromise()
      .then(response => response.json() as Array<HealthCheckDetailModel>)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };


}
