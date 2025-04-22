import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}