import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http/';

import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component'
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent
  ],
  exports: [
    CampoControlErroComponent,
    FormDebugComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
