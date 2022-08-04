import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../models/cars.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  public cars: Car[];
  constructor(
    private _carsService: CarsService
  ) { }

  ngOnInit() {
    this.cars = this._carsService.getCars();
  }

  ionViewWillEnter(){
    this.cars = this._carsService.getCars();
  }

}
