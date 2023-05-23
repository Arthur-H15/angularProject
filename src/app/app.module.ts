import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnauthorizedInterceptor } from './interceptors/authInterceptorService';

import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule
    
    // TableModule
    // LoginModule,
    // dashboardModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: UnauthorizedInterceptor, 
      multi: true 
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
