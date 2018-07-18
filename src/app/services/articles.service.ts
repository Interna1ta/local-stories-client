import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class ArticlesService {

  private baseUrl = environment.apiUrl;
  private options = {
    withCredentials: true
  };

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/articles`, this.options)
      .toPromise();
  }

  create(article): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/articles`, article, this.options)
      .toPromise();
  }

  tweet(article) {
    return this.httpClient.post(`${this.baseUrl}/twitter`, article, this.options)
      .toPromise();
  }

  userArticles(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/articles/users/${id}`, this.options)
      .toPromise();
  }

}
