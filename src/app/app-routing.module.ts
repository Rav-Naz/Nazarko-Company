import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndividualsComponent } from './subpages/individuals/individuals.component';
import { CompaniesComponent } from './subpages/companies/companies.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'oferta-dla-osob-prywatnych', component: IndividualsComponent},
  {path: 'oferta-dla-firm', component: CompaniesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
