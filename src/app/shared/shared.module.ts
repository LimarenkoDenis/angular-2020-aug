import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FilterPipe } from './pipes/filter.pipe';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultAmountPipe } from './pipes/result-amount.pipe';
import { AclDirective } from './directives/acl/acl.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    FilterPipe,
    ResultAmountPipe,
    AclDirective
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CardComponent,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    FilterPipe,
    MatInputModule,
    ReactiveFormsModule,
    ResultAmountPipe,
    AclDirective
  ],
  providers: [
    FilterPipe
  ]
})
export class SharedModule { }
