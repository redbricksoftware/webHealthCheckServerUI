import {NgModule, enableProdMode}      from '@angular/core';
import {BrowserModule, enableDebugTools} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';

import {RouterModule, Routes} from '@angular/router';

import {HttpModule}    from '@angular/http';

import {HealthCheckConfigComponent} from "./healthCheckConfig/health-check-config.component";
import {HealthCheckDetailComponent} from "./healthCheckConfig/health-check-config-details.component";
import {HealthCheckStatusSummaryDailyComponent} from "./healthCheckStatus/health-check-status-summary-daily.component";
import {HealthCheckStatusDetailComponent} from "./healthCheckStatus/health-check-status-detail.component";


const appRoutes: Routes = [
    {path: 'healthCheckConfig', component: HealthCheckConfigComponent},
    {path: '**', component: HealthCheckStatusSummaryDailyComponent}
];

//enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HealthCheckConfigComponent,
        HealthCheckDetailComponent,
        HealthCheckStatusSummaryDailyComponent,
        HealthCheckStatusDetailComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}