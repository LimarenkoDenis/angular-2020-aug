import { TestBed, async } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let http;
  let httpSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClient,
      ]
    });
    service = TestBed.inject(ProductService);
    http = TestBed.inject(HttpClient);
    httpSpy = spyOn(http, 'get').and.returnValue(123);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSum', () => {
    it('should add numbers correctly', () => {
      expect(service.getSum(2, 2)).toBe(4);
    });

    it('should add negative numbers correctly', () => {
      expect(service.getSum(4, -2)).toBe(2);
    });

    it('should not be 4', () => {
      expect(service.getSum(2, 3)).not.toBe(4);
    });

    it('should not be 4', () => {
      expect(service.getSum(2, 3)).toBeGreaterThan(4);
    });

    it('should not be 4', () => {
      expect(service.getSum(2, 3)).not.toBeLessThan(4);
    });

    it('should not be 4', () => {
      expect(!!service.getSum(2, 3)).toBeTrue();
    });

    it('should not be 4', () => {
      expect(!service.getSum(2, 3)).toBeFalse();
    });
  });

  describe('getMultiplication', () => {
    it('should multiply numbers correctly', () => {
      expect(service.getMultiplication(2, 2)).toBe(4);
    });

    it('should multiply negative numbers correctly', () => {
      expect(service.getMultiplication(4, -2)).toBe(-8);
    });
  });

  describe('getObjectCopy', () => {
    let mockData;

    beforeEach(() => {
      mockData = {
        test: 'test value',
        123: 123,
        internal: {
          test: 'internal test value'
        }
      };
    });

    it('should return a new reference', () => {
      expect(service.getObjectCopy(mockData)).not.toBe(mockData);
    });

    it('should return a new reference and clone internal data', () => {
      expect(service.getObjectCopy(mockData)).toEqual(mockData);
    });

    it('should return a new reference and clone internal data', () => {
      expect(service.getObjectCopy(mockData)).toEqual(jasmine.objectContaining({ test: 'test value' }));
    });

    it('should not return a new reference for internal objects', () => {
      expect(service.getObjectCopy(mockData).internal).toBe(mockData.internal);
    });

  });

  describe('dependency test', () => {
    afterEach(() => {

    });

    it('should run method', () => {
      console.log('http: ', http);
      service.getAuthProducts().subscribe(result => {
        expect(!!result).toBeDefined();

        expect(http.get).toHaveBeenCalled();
      });
    });
  });
});
