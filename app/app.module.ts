import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';

import {HttpModule}    from '@angular/http';

import {HealthCheckConfigComponent} from "./healthCheckConfig/health-check-config.component";
import {HealthCheckDetailComponent} from "./healthCheckConfig/health-check-config-details.component";
import {HealthCheckStatusSummaryDailyComponent} from "./healthCheckStatus/health-check-status-summary-daily.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HealthCheckConfigComponent,
        HealthCheckDetailComponent,
        HealthCheckStatusSummaryDailyComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}