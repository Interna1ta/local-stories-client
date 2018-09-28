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

  followOne(id: string): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}/follow`, id, this.options)
    .toPromise();
  }
  
  unfollowOne(id: string): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}/unfollow`, id, this.options)
    .toPromise();
  }
  
  userFollowers(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}/followers`, this.options)
      .toPromise();
  }

  userFollowing(id: string): Promise<any> {
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
}