import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesla-answer',
  templateUrl: './tesla-answer.component.html',
  styleUrls: ['./tesla-answer.component.css']
})
export class TeslaAnswerComponent implements OnInit {

  answer = "No";

  constructor() { }

  ngOnInit(): void {
  }

}
