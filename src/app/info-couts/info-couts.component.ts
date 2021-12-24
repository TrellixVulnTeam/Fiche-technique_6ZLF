import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-couts',
  templateUrl: './info-couts.component.html',
  styleUrls: ['./info-couts.component.css']
})
export class InfoCoutsComponent implements OnInit {
  coutForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.coutForm = this.formBuilder.group({
      personnel: ['', Validators.required],
      coutFluide: ['', Validators.required],
      coefficient: ['', Validators.required]

    });

  }
  Show(){
    console.log(this.coutForm.get('personnel')?.value)
  }
}
