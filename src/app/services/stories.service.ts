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

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/stories`, this.options)
      .toPromise();
  }

  create(story) {
    return this.httpClient.post(`${this.baseUrl}/stories`, story, this.options)
      .toPromise();
  }

  tweet(story) {
    return this.httpClient.post(`${this.baseUrl}/twitter`, story, this.options)
      .toPromise();
  }

  userStories(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/stories/users/${id}`, this.options)
      .toPromise();
  }
}
