import { Component } from '@angular/core';
import oferty from '../../../assets/json/osoby-prywatne.json';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent {

  offer: Array<{title: string, category: Array<{
    title?: string,
    points: Array<string>
  }>}> = oferty;
}
