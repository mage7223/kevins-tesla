import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeslaDetails } from './tesla-details';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class QuestionableServiceService {

  private path = `${environment.baseRest}/tesla/`;

  constructor(
    private http: HttpClient
  ) { }

  getStatus(): Observable<TeslaDetails> {
    return this.http.get<TeslaDetails>(this.path);
  }

}
