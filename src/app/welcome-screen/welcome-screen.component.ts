import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../services/app-service/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit{
  contactForm: any
  
  constructor(private formBuilder:FormBuilder, private appService:AppService,private router:Router) { }
  

  ngOnInit() {
     this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  onSubmit(){
    this.appService.setUserName(this.contactForm.value.username)
    this.router.navigate(["/search-page"])
  }
  

}