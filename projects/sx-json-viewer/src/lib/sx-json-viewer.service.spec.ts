import { TestBed } from '@angular/core/testing';

import { SxJsonViewerService } from './sx-json-viewer.service';

describe('SxJsonViewerService', () => {
  let service: SxJsonViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SxJsonViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
