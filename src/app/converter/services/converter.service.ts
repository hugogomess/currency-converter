import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Conversion, ConversionResponse } from '../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  constructor(private httpClient: HttpClient) { }

  /**
   * Convert currency in api request.
   *
   * @param Conversion conversion
   * @return Observable<any>
   */
  convert(conversion: Conversion): Observable<any> {
    const params = `&base=${conversion.sourceCurrency}&symbols=${conversion.targetCurrency}`;
    return this.httpClient.get(this.BASE_URL + params);
  }

  targetQuotation(conversionResponse: ConversionResponse, conversion: Conversion): number {
    if (conversionResponse === undefined) {
      return 0;
    }

    return conversionResponse.rates[conversion.targetCurrency];
  }

  sourceQuotation(conversionResponse: ConversionResponse, conversion: Conversion): string {
    if (conversionResponse === undefined) {
      return '0';
    }

    return (1 / conversionResponse.rates[conversion.targetCurrency]).toFixed(4);
  }

  quotationDate(conversionResponse: ConversionResponse): string {
    if (conversionResponse === undefined) {
      return '';
    }

    return conversionResponse.date;
  }
}
