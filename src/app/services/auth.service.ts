import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = environment.apiUrl + '/auth';
  private baseUrl = environment.apiUrl;
  private options = {
    withCredentials: true
  };

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    return this.httpClient.get(`${this.API_URL}/me`, this.options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  login(user: any): Promise<any> {
    return this.httpClient.post(`${this.API_URL}/login`, user, this.options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  signup(user: any): Promise<any> {
    return this.httpClient.post(`${this.API_URL}/signup`, user, this.options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  logout(): Promise<any> {
    return this.httpClient.post(`${this.API_URL}/logout`, {}, this.options)
      .toPromise()
      .then(() => this.setUser());
  }

  getUser(): any {
    return this.user;
  }

  twitterLogin() {
    window.location.href = `${this.API_URL}/twitter/login`;
  }

}