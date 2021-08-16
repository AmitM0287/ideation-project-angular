import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  name = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]{4,}')]);
  phone = new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  propertyType = new FormControl('', [Validators.required]);
  serviceType = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]{4,}')]);
  
  submit() {
    console.log(this.name.value, this.propertyType.value, this.message.value)
  }

}
