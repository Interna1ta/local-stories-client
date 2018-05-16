import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class StoriesService {

  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/stories`, options)
      .toPromise();
  }

  create(story) {
    const options = {
      withCredentials: true
    }
    return this.httpClient.post(`${this.baseUrl}/stories`, story, options)
      .toPromise();
  }

  tweet(story) {
    const options = {
      withCredentials: true
    }
    return this.httpClient.post(`${this.baseUrl}/twitter`, story, options)
      .toPromise();
  }

  userStories(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/stories/users/${id}`, options)
      .toPromise();
  }

}
