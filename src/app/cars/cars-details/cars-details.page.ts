import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/cars.model';
import { AlertController} from '@ionic/angular'

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.page.html',
  styleUrls: ['./cars-details.page.scss']
})
export class CarsDetailsPage implements OnInit {
  public car : Car;
  constructor( 
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private carsService: CarsService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('carID');
      console.log(id);
      
      this.car = this.carsService.getCar(id);
      console.log(this.car);
    })
  }

  async deleteCar(id:any){
    const alerta = await this.alertController.create(
      {
        header: '¿Desea eliminar?',
        message: 'Con cuidado',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: ()=>{
              this.carsService.deleteCars(id);
              this._router.navigate(['/cars']);
            }
          }
        ]
      }
    );

    
    await alerta.present();
   
  }



  

}
