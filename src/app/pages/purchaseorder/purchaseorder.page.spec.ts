import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseorderPage } from './purchaseorder.page';

describe('PurchaseorderPage', () => {
  let component: PurchaseorderPage;
  let fixture: ComponentFixture<PurchaseorderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
