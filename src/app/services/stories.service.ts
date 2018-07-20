import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class StoriesService {

  private baseUrl = environment.apiUrl;
  private options = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getOne(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/stories/${id}`, this.options)
      .toPromise();
  }

  listAll(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/stories`, this.options)
      .toPromise();
  }

  create(story: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/stories`, story, this.options)
      .toPromise();
  }

  tweet(story: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/twitter`, story, this.options)
      .toPromise();
  }

  userStories(id: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/stories/users/${id}`, this.options)
      .toPromise();
  }

  // listTweets(): Promise<any> {
  //   return this.httpClient.get(`${this.baseUrl}/stories/tweets`, this.options)
  //     .toPromise();
  // }
}
