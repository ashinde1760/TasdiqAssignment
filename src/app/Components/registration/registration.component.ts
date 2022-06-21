import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  project: FormGroup;
  data: any;

  constructor(private router:Router ) { 
    this.project = new FormGroup({
      name:new FormControl("", Validators.required),
      email: new FormControl("",Validators.email),
      phoneNumber:new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      checkBox:new FormControl("",Validators.required)
  });
  }

  ngOnInit(): void {
  }

  onSignUp() {
    
}

}
