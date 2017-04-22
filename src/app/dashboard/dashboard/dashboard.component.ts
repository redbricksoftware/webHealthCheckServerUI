import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
// import * as timer from 'timers';
import {HealthCheckDetailModel} from '../../../models/healthCheckDetailModel';
import {HealthCheckSummaryModel} from '../../../models/healthCheckSummaryModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  dashboardSummaryData: Array<HealthCheckSummaryModel>;
  dashboardDetailData: Array<HealthCheckDetailModel>;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getSummaryData();
    this.getDetailData();
  }

  getSummaryData() {
    this.dashboardService.getHealthCheckSummaryDataLastXDays(1)
      .then((response) => {
        this.dashboardSummaryData = response;
        console.log(this.dashboardSummaryData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getDetailData() {
    this.dashboardService.getHealthCheckDetailLastXHours(24)
      .then((response) => {
        this.dashboardDetailData = response;
        console.log(this.dashboardDetailData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
