import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config/config.component';
import { ConfigDetailComponent } from './config/config-detail/config-detail.component';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { DropdownMessagesComponent } from './messages/dropdown-messages/dropdown-messages.component';
import { DropdownNotificationsComponent } from './notifications/dropdown-notifications/dropdown-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    ConfigDetailComponent,
    NotificationsComponent,
    MessagesComponent,
    DropdownMessagesComponent,
    DropdownNotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
