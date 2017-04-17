import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit {

  configData: Object[];
  selectedConfigID: number;
  newConfigData: Object = {
    'name': 'New Config',
    'protocol': 'https',
    'uri': 'localhost',
    'port': '443',
    'degradedResponseTimeMS': '750',
    'failedResponseTimeMS': '1500',
    'pollFrequencyInSeconds': '900',
    'expectedResponseCode': '2XX'
  };

  constructor(private configService: ConfigService) {
  };

  ngOnInit() {
    this.getConfig();
  };

  getConfig(): void {
    console.log('getConfig');
    this.configData = null;
    this.configService.getConfig()
      .then(data => {
        this.configData = data;
      })
      .catch((ex) => {
        console.log('Error fetching summary data:', ex);
      });
  };

  addConfig(config): void {
    this.configService.addConfig(config)
      .then((data) => {
      this.configData.push(data);
        // this.getConfig();
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  onDetailSaved(eventStatus: boolean): void {
    console.log('event status: ' + eventStatus);
    this.getConfig();
  }

  selectConfig(config): void {
    this.selectedConfigID = config.id;
  }
  ;

}
