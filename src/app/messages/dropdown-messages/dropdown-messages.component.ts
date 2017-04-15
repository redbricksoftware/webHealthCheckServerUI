import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-messages',
  templateUrl: './dropdown-messages.component.html',
  styleUrls: ['./dropdown-messages.component.css']
})
export class DropdownMessagesComponent implements OnInit {

  messageData: Object[] = [
    {
      'from': 'John Doe',
      'date': 'Yesterday',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    },
    {
      'from': 'Sally Smith',
      'date': 'Today',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    },
    {
      'from': 'John Doe',
      'date': 'Yesterday',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    },
    {
      'from': 'Sally Smith',
      'date': 'Today',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    },
    {
      'from': 'John Doe',
      'date': 'Yesterday',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
