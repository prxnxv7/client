import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notif-pwa'; 
  constructor(
    private notificationService: NotificationService,
    private http: HttpClient
  ) {}

  subscribeToNotifications() {
    this.notificationService.subscribeToNotifications();
  }
}
