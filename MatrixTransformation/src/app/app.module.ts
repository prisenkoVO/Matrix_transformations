import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizeMatrixComponent } from './components/size-matrix/size-matrix.component';
import { InputMatrixComponent } from './components/input-matrix/input-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeMatrixComponent,
    InputMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
