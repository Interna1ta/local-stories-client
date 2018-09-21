import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {

  private baseUrl = environment.apiUrl;
  private options = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }
  
  ngOnInit() {
  }

  getOne(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, this.options)
      .toPromise();
  }

  addFollowers(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}/addfollowers`, this.options)
      .toPromise();
  }

  getNotifications(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}/notifications`, this.options)
      .toPromise();
  }
  
  followOne(idUsers: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/users/${idUsers.idMe}/follow`, idUsers, this.options)
    .toPromise();
  }

  followOneNotification(idUsers: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/users/${idUsers.idMe}/follow`, idUsers, this.options)
      .toPromise();
  }
  
  unfollowOne(idUsers: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/users/${idUsers.idMe}/unfollow`, idUsers, this.options)
    .toPromise();
  }
  
  userFollowers(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}/followers`, this.options)
      .toPromise();
  }

  userFollowing(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}/following`, this.options)
      .toPromise();
  }

  checkFollow(idUsers: any): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${idUsers.idMe}/checkFollow`, this.options)
      .toPromise();
  }

  editProfile(user: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/users/${user.id}/edit`, user, this.options)
      .toPromise();
  }

  uploadPicture(user: any) {
    return this.httpClient.put(`${this.baseUrl}/users/${user.id}/image`, user.fd, this.options)
      .toPromise();
  }

  signUpNotification(idUser: any): Promise<any> {
    console.log('im in the auth service: ', idUser);
    return this.httpClient.post(`${this.baseUrl}/users/${idUser}/signup`, idUser, this.options)
      .toPromise();
  }
}