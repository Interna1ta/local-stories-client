import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class StoriesService {

  private baseUrl = environment.apiUrl + '/stories';
  private options = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getOne(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`, this.options)
      .toPromise();
  }

  listAll(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}`, this.options)
      .toPromise();
  }

  create(story: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}`, story, this.options)
      .toPromise();
  }
  
  userStories(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, this.options)
      .toPromise();
  }

  deleteStory(id: string): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}/delete`, this.options)
      .toPromise();
  }

  // tweet(story: any): Promise<any> {
  //   return this.httpClient.post(`${this.baseUrl}/twitter`, story, this.options)
  //     .toPromise();
  // }

  // listTweets(): Promise<any> {
  //   return this.httpClient.get(`${this.baseUrl}/tweets`, this.options)
  //     .toPromise();
  // }
}
