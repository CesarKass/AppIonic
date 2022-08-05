import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { AlertController } from '@ionic/angular';
import { Car } from "../../models/cars.model"; 

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.page.html',
  styleUrls: ['./car-edit.page.scss'],
})
export class CarEditPage implements OnInit {
  public car: Car;
  constructor(
    private _carsService: CarsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.car = { "id": "", "marca": "", "modelo": "", "anio": "", "tipo": "", "featurs": [], "img": "" };
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('carID'); 
      
      this.car = this._carsService.getCar(id);  
    })
  }

  async updateCar(marca, modelo, anio, tipo, img) {

    if (marca.value != '' && modelo.value != '' && anio.value != '' && tipo.value != '' && img.value != '') {
      this._activatedRoute.paramMap.subscribe(paramMap => {
        const id = paramMap.get('carID');  
        this.car = this._carsService.getCar(id); 
        this.car = {
          "id": id,
          "marca": marca.value,
          "modelo": modelo.value,
          "anio": anio.value,
          "tipo": tipo.value,
          "featurs": [],
          "img": img.value
        };
        this._carsService.updateCar(id, this.car);
        this._router.navigate(['/cars',id]);
      })
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
