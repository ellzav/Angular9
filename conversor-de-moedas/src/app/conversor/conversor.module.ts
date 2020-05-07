import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService} from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';


@NgModule({
  declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent, DataBrPipe],
  imports: [
    CommonModule,
    FormsModule
    //HttpClient
  ],
  exports:[
    ConversorComponent,
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
