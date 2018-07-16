import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class TweetsService {

  private baseUrl = environment.apiUrl;
  private options = {
    withCredentials: true
  };

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/tweets`, this.options)
      .toPromise();
  }

  create(tweet) {
    return this.httpClient.post(`${this.baseUrl}/tweets`, tweet, this.options)
      .toPromise();
  }

  tweet(tweet) {
    return this.httpClient.post(`${this.baseUrl}/twitter`, tweet, this.options)
      .toPromise();
  }

  userTweets(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/tweets/users/${id}`, this.options)
      .toPromise();
  }

}
