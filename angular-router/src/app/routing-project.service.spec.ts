import { TestBed } from '@angular/core/testing';

import { RoutingProjectService } from './routing-project.service';

describe('RoutingProjectService', () => {
  let service: RoutingProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
