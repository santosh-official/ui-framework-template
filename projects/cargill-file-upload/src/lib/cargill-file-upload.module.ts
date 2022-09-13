import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CargillFileUploadComponent } from './cargill-file-upload.component';

@NgModule({
  declarations: [
    CargillFileUploadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CargillFileUploadComponent
  ]
})
export class CargillFileUploadModule { }
