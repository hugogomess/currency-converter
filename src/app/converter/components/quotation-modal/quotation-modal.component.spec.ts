import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationModalComponent } from './quotation-modal.component';

describe('QuotationModalComponent', () => {
  let component: QuotationModalComponent;
  let fixture: ComponentFixture<QuotationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
