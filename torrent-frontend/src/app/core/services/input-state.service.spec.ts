import { TestBed } from '@angular/core/testing';

import { InputStateService } from './input-state.service';

describe('InputStateService', () => {
  let service: InputStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
