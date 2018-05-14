import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
  }

  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    }
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, options)
      .toPromise();
  }

  
  followOne(bothId: any): Promise<any> {
    const options = {
      withCredentials: true
    }
    return this.httpClient.put(`${this.baseUrl}/users/${bothId.idUser}/follow`, bothId, options)
    .toPromise();
  }
  
  unfollowOne(bothId: any): Promise<any> {
    const options = {
      withCredentials: true
    }
    return this.httpClient.put(`${this.baseUrl}/users/${bothId.idUser}/unfollow`, bothId, options)
    .toPromise();
  }
  
  userFollowers(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}/followers`, options)
      .toPromise();
  }
}