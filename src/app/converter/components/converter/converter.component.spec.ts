import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ConverterComponent } from './converter.component';
import { CurrencyService, ConverterService } from '../../services';
import { NumberDirective } from '../../directives';
import { BrazilianDatePipe } from '../../pipes';
import { QuotationModalComponent } from '../quotation-modal';


describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConverterComponent,
        NumberDirective,
        BrazilianDatePipe,
        QuotationModalComponent
      ],
      providers: [
        CurrencyService,
        ConverterService
      ],
      imports: [
        FormsModule,
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
