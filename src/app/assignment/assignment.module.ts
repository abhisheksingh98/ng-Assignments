import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './assignment-1/users.component';
import { HighlighterDirective } from './assignment-2/highlighter.directive';

@NgModule({
  declarations: [UserComponent, HighlighterDirective],
  imports: [
    CommonModule
  ],
  exports: [UserComponent]

})
export class AssignmentModule { }
