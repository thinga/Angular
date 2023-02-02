import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let service: HeroService;
  let heroServiceMock = MockService(MessageService);
  let httpMock: HttpClient;

  beforeEach(async () => {
    jest.resetAllMocks();
    
   await TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
