import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-notifications',
  templateUrl: './dropdown-notifications.component.html',
  styleUrls: ['./dropdown-notifications.component.css']
})
export class DropdownNotificationsComponent implements OnInit {
  notificationData: Object[] = [
    {
      'notificationMessage': 'API localhost Down',
      'howLongAgo': '4 minutes ago',
      'notificiationClass': 'fa-comment'
    },
    {
      'notificationMessage': 'degraded status',
      'howLongAgo': '4 minutes ago',
      'notificiationClass': 'fa-tasks'
    },
    {
      'notificationMessage': 'new message',
      'howLongAgo': '4 minutes ago',
      'notificiationClass': 'fa-upload'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
