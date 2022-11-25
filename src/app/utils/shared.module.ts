import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  exports: [
    MaterialModule, 
    FormsModule, // template driven forms availabilty
    ReactiveFormsModule, 
    HttpClientModule
  ]
})
export class SharedModule { }
