import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config/config.component';
import { ConfigDetailComponent } from './config/config-detail/config-detail.component';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { DropdownMessagesComponent } from './messages/dropdown-messages/dropdown-messages.component';
import { DropdownNotificationsComponent } from './notifications/dropdown-notifications/dropdown-notifications.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SideNavComponent } from './sideNav/side-nav/side-nav.component';

const appRoutes: Routes = [
  { path: 'notifications', component: NotificationsComponent },
  { path: 'messages',      component: MessagesComponent },
  {
    path: 'config',
    component: ConfigComponent,
    data: { title: 'Config Component' }
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: ConfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    ConfigDetailComponent,
    NotificationsComponent,
    MessagesComponent,
    DropdownMessagesComponent,
    DropdownNotificationsComponent,
    DashboardComponent,
    SideNavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
