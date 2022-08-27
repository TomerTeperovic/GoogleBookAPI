import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../services/app-service/app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {

  contactForm: any
  
  constructor(private formBuilder:FormBuilder, private appService:AppService,private router:Router) { }
  

  ngOnInit() {
     this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  onSubmit(){
    this.appService.setUserName(this.contactForm.value.username)
    this.router.navigate(["/search"])
  }

}
