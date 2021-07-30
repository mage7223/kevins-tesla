import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaAnswerComponent } from './tesla-answer.component';

describe('TeslaAnswerComponent', () => {
  let component: TeslaAnswerComponent;
  let fixture: ComponentFixture<TeslaAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeslaAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
