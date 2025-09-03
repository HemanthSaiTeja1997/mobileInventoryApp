import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodReciptPage } from './good-recipt.page';

describe('GoodReciptPage', () => {
  let component: GoodReciptPage;
  let fixture: ComponentFixture<GoodReciptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodReciptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
