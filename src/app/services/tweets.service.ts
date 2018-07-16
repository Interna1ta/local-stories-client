import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class TweetsService {

  private baseUrl = environment.apiUrl;
  private options = {
    withCredentials: true
  };

  constructor() { }

}
