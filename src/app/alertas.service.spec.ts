import { TestBed } from '@angular/core/testing';
import { alertasService } from './alertas.service';

describe('alertasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: alertasService = TestBed.get(alertasService);
    expect(service).toBeTruthy();
  });
});
