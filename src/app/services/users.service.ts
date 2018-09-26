import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {

  private baseUrl = environment.apiUrl + '/users';
  private options = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }
  
  ngOnInit() {
  }

  getOne(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`, this.options)
      .toPromise();
  }

  addFollowers(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}/addfollowers`, this.options)
      .toPromise();
  }

  getNotifications(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}/notifications`, this.options)
      .toPromise();
  }
  
  followOne(idUsers: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${idUsers.idMe}/follow`, idUsers, this.options)
    .toPromise();
  }

  followOneNotification(idUsers: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/${idUsers.idMe}/follow`, idUsers, this.options)
      .toPromise();
  }
  
  unfollowOne(idUsers: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${idUsers.idMe}/unfollow`, idUsers, this.options)
    .toPromise();
  }
  
  userFollowers(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}/followers`, this.options)
      .toPromise();
  }

  userFollowing(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}/following`, this.options)
      .toPromise();
  }

  editProfile(user: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${user.id}/edit`, user, this.options)
      .toPromise();
  }

  uploadPicture(user: any) {
    return this.httpClient.put(`${this.baseUrl}/${user.id}/image`, user.fd, this.options)
      .toPromise();
  }

  signUpNotification(id: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/${id}/signup`, id, this.options)
      .toPromise();
  }
}