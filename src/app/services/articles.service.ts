import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class ArticlesService {

  private baseUrl = environment.apiUrl + '/articles';
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

  create(article): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}`, article, this.options)
      .toPromise();
  }

  userArticles(id): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, this.options)
    .toPromise();
  }
  
  deleteArticle(id: string): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}/delete`, this.options)
    .toPromise();
  }
  
  // tweet(article) {
  //   return this.httpClient.post(`${this.baseUrl}/twitter`, article, this.options)
  //     .toPromise();
  // }
}
