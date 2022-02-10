import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../servies/http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent{

  public form: FormGroup;
  public sended: boolean = false;
  private loading: boolean = false;
  public today = new Date();
  public contact:Array<any> =[
    {text: "+48 663 744 944", icon: "whatsapp_icon.svg", action: "call"},
    {text: "kontakt@nazarko-company.pl", icon: "email_icon.svg", action: "call"},
    {text: "ul. Myśliwska 148, 37-620 Horyzniec-Zdrój", icon: "location_icon.svg", action: "call"},
    {text: "NC - Nadzory, Koordynacja, Doradztwo Techniczne - Branża Sanitarna", icon: "facebook_icon.svg", action: "call"},
  ] 


  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpService) {
    this.form = this.formBuilder.group({
      sender: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
      sender_email: [null, [Validators.required,Validators.minLength(2), Validators.maxLength(100), Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]],
      message: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]]
    });
  }

  navigate(route: string) {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.router.navigateByUrl(route);
    }, 300)
  }

  onSubmit() {
    if (this.isFormGroupValid) {
      this.loading = true;
      this.httpService.sendMessage(this.form.get('sender')?.value ,this.form.get('sender_email')?.value,this.form.get('message')?.value)
      .then(() => {
        this.loading = false;
        this.sended = true;
        this.form.reset();
      }).catch(err => { this.sended = false; console.log(err)})
    }
  }

  isControlInvalid(name: string) {
    return !this.form.get(name)?.valid && this.form.get(name)?.touched;
  }

  get isFormGroupValid() {
    return this.form.valid && !this.isLoading;
  }


  get isLoading() {
    return this.loading;
  }
}
