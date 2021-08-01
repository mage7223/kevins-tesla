import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TeslaDetails } from './tesla-details';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class QuestionableServiceService {

  private path = "https://do.questionable.codes/tesla/";

  private config = {

  };

  constructor(
    private http: HttpClient
  ) { }

  getStatus(): Observable<TeslaDetails> {
    return this.http.get<TeslaDetails>(this.path);
  }

}
