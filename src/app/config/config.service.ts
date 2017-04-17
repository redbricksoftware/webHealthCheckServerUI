import {Injectable} from '@angular/core';
import {Headers, Http, HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

  private webHealthCheckBaseURI = 'http://localhost:3000/api/v1/'
  private headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  };

  getConfig(): Promise<Object[]> {
    return this.http.get(this.webHealthCheckBaseURI + 'config/')
      .toPromise()
      .then(response => response.json() as Object[])
      .catch(this.handleError);
  };

  getSingleConfig(configID: number): Promise<Object> {
    return this.http.get(this.webHealthCheckBaseURI + 'config/' + configID)
      .toPromise()
      .then(response => response.json() as Object[])
      .catch(this.handleError);
  };

  addConfig(config: Object): Promise<Object> {
    return this.http.post(this.webHealthCheckBaseURI + 'config/', config)
      .toPromise()
      .then(response => response.json() as Object)
      .catch(this.handleError);
  }

  updateConfig(configID: number, config: Object): Promise<Object> {
    return this.http.put(this.webHealthCheckBaseURI + 'config/' + configID, config)
      .toPromise()
      .then(response => response.json() as Object[])
      .catch(this.handleError);
  };

  disableConfig(configID: number, enabled: boolean): Promise<boolean> {

    const config = {'enabled': !enabled};
    console.log(config);

    return this.http.patch(this.webHealthCheckBaseURI + 'config/' + configID, config)
      .toPromise()
      .then(response => true as boolean)
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };
}
