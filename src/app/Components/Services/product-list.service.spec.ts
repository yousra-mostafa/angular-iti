/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductListService } from './product-list.service';

describe('Service: ProductList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListService]
    });
  });

  it('should ...', inject([ProductListService], (service: ProductListService) => {
    expect(service).toBeTruthy();
  }));
});
