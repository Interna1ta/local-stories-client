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

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
  }

  getOne(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, this.options)
      .toPromise();
  }
  
  followOne(bothId: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/users/${bothId.idMe}/follow`, bothId, this.options)
    .toPromise();
  }
  
  unfollowOne(bothId: any): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/users/${bothId.idMe}/unfollow`, bothId, this.options)
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

  checkFollow(bothId: any): Promise<any> {
    console.log(`${bothId.idMe}`);
    return this.httpClient.get(`${this.baseUrl}/users/${bothId.idMe}/checkFollow`, this.options)
      .toPromise();
  }

  checkFollowMe(id: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/users/${id}/checkFollowMe`, id, this.options)
      .toPromise();
  }
}