import { TestBed } from '@angular/core/testing';

import { MyinfoRepositoryService } from './myinfo-repository.service';

describe('MyinfoRepositoryService', () => {
  let service: MyinfoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyinfoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
