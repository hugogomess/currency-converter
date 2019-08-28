import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Conversion, ConversionResponse } from '../../models';
import { ConverterService } from '../../services';



@Component({
  selector: 'app-quotation-modal',
  templateUrl: './quotation-modal.component.html',
  styleUrls: ['./quotation-modal.component.css']
})
export class QuotationModalComponent implements OnInit {

  @Input() id: string;
  @Input() conversionResponse: ConversionResponse;
  @Input() conversion: Conversion = new Conversion();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
  }

  newQuery() {
    this.onConfirm.emit();
  }

  get convertedValue(): string {
    if (this.conversionResponse === undefined) {
      return '0';
    }

    return (this.conversion.value * this.conversionResponse.rates[this.conversion.targetCurrency]).toFixed(2);
  }

  get targetQuotation(): number {
    return this.converterService.targetQuotation(this.conversionResponse, this.conversion);
  }

  get sourceQuotation(): string {
    return this.converterService.sourceQuotation(this.conversionResponse, this.conversion);
  }

  get quotationDate(): string {
    return this.converterService.quotationDate(this.conversionResponse);
  }

}
