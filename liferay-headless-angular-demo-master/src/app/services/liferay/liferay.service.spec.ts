import {inject, TestBed} from '@angular/core/testing';

import {LiferayService} from './liferay.service';

describe('LiferayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiferayService]
    });
  });

  it('should be created', inject([LiferayService], (service: LiferayService) => {
    expect(service).toBeTruthy();
  }));
});
