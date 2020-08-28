import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConvertToSpacesPipe} from './pipes/convert-to-spaces.pipe';



@NgModule({
  declarations: [ConvertToSpacesPipe],
  imports: [
    CommonModule
  ],
  exports: [ConvertToSpacesPipe],
})
export class SharedModule { }
