import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-config-detail',
  templateUrl: './config-detail.component.html',
  styleUrls: ['./config-detail.component.css']
})
export class ConfigDetailComponent implements OnInit {
  @Input() configData: Object;

  constructor() { }

  ngOnInit() {
  }

}
