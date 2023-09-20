import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  readonly VAPID_PUBLIC_KEY =
    'BITStLkGozB9KZ-VMKrIVWzMi6jpLDKrjPEzJ2LUbDSCQm0LSR7yV83N1bzDqfSekG0jJOiKe5f-3HGXA65xFgM';

  constructor(private swPush: SwPush, private http: HttpClient) {}

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((subscription) => {
        // Send the new subscription to your server for storage
        console.log('subcription details:', JSON.stringify(subscription));
        this.http
          .post(`${environment.apiUrl}/api/subscribe`, subscription)
          .subscribe(
            () => {
              console.log('Subscription updated.');
            },
            (error) => {
              console.error('Failed to update subscription:', error);
            }
          );
      })
      .catch((error) => {
        console.error('Failed to subscribe to notifications:', error);
      });
  }
}
