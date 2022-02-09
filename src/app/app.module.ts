import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndividualsComponent } from './subpages/individuals/individuals.component';
import { CompaniesComponent } from './subpages/companies/companies.component';
import { NavigationBarComponent } from './utils/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    IndividualsComponent,
    CompaniesComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
