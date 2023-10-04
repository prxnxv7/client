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
  subscriptionDetails: string | undefined;
  errordetails: string | undefined;
  constructor(
    private notificationService: NotificationService,
    private http: HttpClient
  ) {}

  subscribeToNotifications() {
    this.notificationService.subscribeToNotifications()
      .then((subscription) => {
        // Update the subscriptionDetails property with the subscription details
        this.subscriptionDetails = JSON.stringify(subscription);
      })
      .catch((error) => {
        console.error('Failed to subscribe to notifications:', error);
        this.errordetails=error
      });
  }
}
