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


  constructor(
    private questionable: QuestionableServiceService
  ) {
    this.questionable.getStatus().subscribe(status => this.teslaDetails = status);
   }

  ngOnInit(): void {
    //this.teslaDetails = this.questionable.getStatus();
  }

}
