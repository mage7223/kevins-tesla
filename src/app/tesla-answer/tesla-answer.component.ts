import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionableServiceService } from '../questionable-service.service';
import { TeslaDetails } from '../tesla-details';

@Component({
  selector: 'app-tesla-answer',
  templateUrl: './tesla-answer.component.html',
  styleUrls: ['./tesla-answer.component.css']
})
export class TeslaAnswerComponent implements OnInit {

  teslaDetails: TeslaDetails = new TeslaDetails();
  refreshIntervalMinutes: number = 1;
  refreshInterval: any = null;


  constructor(
    private questionable: QuestionableServiceService
  ) {
   }

  ngOnInit(): void {
    this.refreshStatus(this.questionable);
    this.refreshInterval = setInterval(this.refreshStatus, 1000 * 60 * this.refreshIntervalMinutes, this.questionable);
  }

  refreshStatus(service: QuestionableServiceService) {
    service.getStatus().subscribe(status => this.teslaDetails = status);
  }

}
