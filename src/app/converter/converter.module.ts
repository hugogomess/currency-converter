import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';


@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
