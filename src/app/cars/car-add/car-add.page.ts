import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { AlertController } from '@ionic/angular';
import { Car } from "../../models/cars.model"; 

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.page.html',
  styleUrls: ['./car-add.page.scss'],
})
export class CarAddPage implements OnInit {
  public car: Car;
  constructor(
    private _carsService: CarsService,
    private _router: Router,
    private alertController: AlertController
  ) {
    this.car = { "id": "", "marca": "", "modelo": "", "anio": "", "tipo": "", "featurs": [], "img": "" };
  }

  ngOnInit() {
  }

  async addCar(marca, modelo, anio, tipo, img) {

    if (marca.value != '' && modelo.value != '' && anio.value != '' && tipo.value != '' && img.value != '') {
      this.car = {
        "id": "",
        "marca": marca.value,
        "modelo": modelo.value,
        "anio": anio.value,
        "tipo": tipo.value,
        "featurs": [],
        "img": img.value
      };
      this._carsService.addCars(this.car);
      this._router.navigate(['/cars']);
    } else {
      const alert = await this.alertController.create({
        header: 'Atención',
        subHeader: 'Campos vacios',
        message: 'Revisa los campos',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }


}
