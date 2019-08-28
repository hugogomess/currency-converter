import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConverterService
    ],
    imports: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: ConverterService = TestBed.get(ConverterService);
    expect(service).toBeTruthy();
  });
});
