import { TestBed } from '@angular/core/testing';

import { QuestionableServiceService } from './questionable-service.service';

describe('QuestionableServiceService', () => {
  let service: QuestionableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
