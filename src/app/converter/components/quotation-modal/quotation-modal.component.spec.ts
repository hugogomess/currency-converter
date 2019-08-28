import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationModalComponent } from './quotation-modal.component';
import { BrazilianDatePipe } from '../../pipes';
import { ConverterService } from '../../services';


describe('QuotationModalComponent', () => {
  let component: QuotationModalComponent;
  let fixture: ComponentFixture<QuotationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuotationModalComponent,
        BrazilianDatePipe
      ],
      providers: [
        ConverterService
      ]
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
