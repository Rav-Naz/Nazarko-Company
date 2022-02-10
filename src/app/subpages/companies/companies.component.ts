import { Component } from '@angular/core';
import oferty from '../../../assets/json/firmy.json';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent  {

  offer: Array<{title: string, category: Array<{
    title?: string,
    points: Array<string>
  }>}> = oferty;
}
