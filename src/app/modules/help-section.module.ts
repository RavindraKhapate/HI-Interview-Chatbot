import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpSectionComponent } from '../components/help-section/help-section.component';  
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HelpSectionComponent
  ],
  exports: [HelpSectionComponent],
})
export class HelpSectionModule { }

