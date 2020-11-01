import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  formRequest: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formRequest = this.fb.group({
      "lastName": ["", [Validators.required]],
      "firstName": ["", [Validators.required]],
      "email": ["", [Validators.required, Validators.email]],
      "phone": ["+7", [Validators.required]],
    })
  }

  checkValidation(): boolean {
    let phone = this.formRequest.controls.phone.value;
    if (this.formRequest.valid && phone.replace(/\D/g, '').length == 11)
      return false;
    else
      return true;
  }

}


