import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api/api.module';
import { PageModule } from './page/page.module';
import { PageContainerComponent } from './component/page-container/page-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
