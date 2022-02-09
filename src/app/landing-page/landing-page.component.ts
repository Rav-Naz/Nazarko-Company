import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  today = new Date();
  contact:Array<any> =[
    {text: "+48 663 744 944", icon: "whatsapp_icon.svg", action: "call"},
    {text: "kontakt@nazarko-company.pl", icon: "email_icon.svg", action: "call"},
    {text: "ul. Myśliwska 148, 37-620 Horyzniec-Zdrój", icon: "location_icon.svg", action: "call"},
    {text: "NC - Nadzory, Koordynacja, Doradztwo Techniczne - Branża Sanitarna", icon: "facebook_icon.svg", action: "call"},
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
