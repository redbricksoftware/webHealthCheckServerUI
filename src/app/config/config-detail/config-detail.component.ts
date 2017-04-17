import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.css'],
  providers: [ConfigService]
})
export class ConfigDetailComponent implements OnInit {
  @Input() selectedConfigID: number;
  @Output() onDetailSaved = new EventEmitter<boolean>();

  configData: any;
  // saving = false;
  // saveSuccess = false;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.configService.getSingleConfig(this.selectedConfigID)
      .then((data) => {
        this.configData = data;
      })
      .catch((err) => {
        console.log(err);

      });
  }

  updateConfig(config) {

    this.configService.updateConfig(config.id, config)
      .then((response) => {
        this.onDetailSaved.emit(true);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  disableConfig(config) {

    this.configService.disableConfig(config.id, config.enabled)
      .then((response) => {
        this.configData.enabled = !config.enabled;
        this.onDetailSaved.emit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
