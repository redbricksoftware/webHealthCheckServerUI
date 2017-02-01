import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';

import {HttpModule}    from '@angular/http';

import {HealthCheckComponent} from './config/health-check.component';
import {HealthCheckDetailComponent} from "./healthCheckConfig/health-check-config-details.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HealthCheckComponent,
        HealthCheckDetailComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}