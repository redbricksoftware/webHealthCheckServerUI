import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit {
  configData: Object[];
  selectedConfigData: Object;

  constructor(private configService: ConfigService) {
  };

  ngOnInit() {
    this.getConfig();
  };

  getConfig(): void {
    this.configService.getConfig()
      .then(data => {
        this.configData = data;

        console.log(data);

        // TODO: remove after testing.
        //this.selectedConfigData = this.configData[0];
      })
      .catch((ex) => {
        console.log('Error fetching summary data:', ex);
      });
  };

  selectConfig(config): void {
    this.selectedConfigData = config;
  };

}
