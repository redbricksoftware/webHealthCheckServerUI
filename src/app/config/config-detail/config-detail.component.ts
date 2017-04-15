import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.css'],
  providers: [ConfigService]
})
export class ConfigDetailComponent implements OnInit {
  @Input() configData: any;
  saving = false;
  saveSuccess = false;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.saveSuccess = false;
  }

  updateConfig(config) {
    console.log(config);

    this.setSavingStatus();

    this.configService.updateConfig(config.id, config)
      .then((response) => {
        this.setSavingStatus();
        this.saveSuccess = true;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  disableConfig(config) {
    console.log('disable');

    this.setSavingStatus();

    this.configService.disableConfig(config.id, config.enabled)
      .then((response) => {
        this.setSavingStatus();
        this.saveSuccess = true;

        this.configData.enabled = !this.configData.enabled;

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setSavingStatus(): void {
    this.saving = !this.saving;
  }
}
