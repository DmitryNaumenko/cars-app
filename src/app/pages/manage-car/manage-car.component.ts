import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-car',
  templateUrl: './manage-car.component.html',
  styleUrls: ['./manage-car.component.scss']
})
export class ManageCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit = (form: NgForm) => {
    console.log(form);
  }

}
