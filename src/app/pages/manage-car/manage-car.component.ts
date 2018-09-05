import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-manage-car',
  templateUrl: './manage-car.component.html',
  styleUrls: ['./manage-car.component.scss']
})
export class ManageCarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onSubmit = (form: NgForm) => {
    this.carService.addCar(form.value);
  }

}
