import {Component} from '@angular/core';
import {OnInit} from '@angular/core';


@Component({
    selector: 'HealthCheck',
    templateUrl: 'app/app.view.html',
    styleUrls: ['app/app.styles.css']
    //,providers: [HealthCheckConfigService]
})
export class AppComponent implements OnInit {

    routesEnabled: Object;

    constructor() {
    }

    ngOnInit(): void {
        this.routesEnabled = {
            'config': true,
            'summary': true
        };
    }

}
