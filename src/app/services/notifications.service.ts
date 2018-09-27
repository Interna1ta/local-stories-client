import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class NotificationsService {

  private baseUrl = environment.apiUrl + '/notifications';
  private options = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getNotifications(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`, this.options)
      .toPromise();
  }

  signUpNotification(id: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/${id}/signup`, id, this.options)
      .toPromise();
  }

  followOneNotification(idUsers: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/${idUsers.idMe}/follow`, idUsers, this.options)
      .toPromise();
  }
}
