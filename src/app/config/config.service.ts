import {Injectable} from '@angular/core';
import {Headers, Http, HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

  private webHealthCheckBaseURI = 'http://localhost:3000/api/v1/'
  private headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getConfig(): Promise<Object[]> {
    return this.http.get(this.webHealthCheckBaseURI + 'config')
      .toPromise()
      .then(response => response.json() as Object[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
