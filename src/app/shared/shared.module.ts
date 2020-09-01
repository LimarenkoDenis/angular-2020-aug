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
import { NoopInterceptor } from './interceptors/noop.interceptor';
import { LogInterceptor } from './interceptors/log.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RedirectInterceptor } from './interceptors/redirect.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
    FilterPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: RedirectInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
