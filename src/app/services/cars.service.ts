import { Injectable } from '@angular/core';
import { Car } from '../models/cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  public cars: Car[] = [
    {
      "id": "1",
      "marca": "VOLKSWAGEN",
      "modelo": "JETTA",
      "anio": "2022",
      "tipo": "sedan",
      "featurs": ["18KM/L", "ABS"],
      "img": "https://dam.automovilonline.com.mx/wp-content/uploads/2019/07/VW-Jetta-3-4-del-movap-1.jpg"
    },
    {
      "id": "2",
      "marca": "FORD",
      "modelo": "FIESTA",
      "anio": "2019",
      "tipo": "sedan",
      "featurs": ["20KM/L", "HIDRAULICO"],
      "img": "data:image/jpeg;base64,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"
    },
    {
      "id": "3",
      "marca": "JEEP",
      "modelo": "RENEGADE SPORT AT",
      "anio": "2022",
      "tipo": "truck",
      "featurs": [],
      "img": "https://www.jeep.cr/wp-content/uploads/sites/11/2020/11/renegade.png"
    }
  ];
  constructor() { }

  getCars() {
    return [...this.cars]
  }
  getCar(carID: string) {
    return {
      ...this.cars.find(car => {
        return car.id === carID
      })
    }
  }
  addCars(marca: any, modelo: any, anio: any, tipo: any, img: any) {
    this.cars.push({
      "id": this.cars.length + 1 + '',
      "marca": marca,
      "modelo": modelo,
      "anio": anio,
      "tipo": tipo,
      "featurs": [],
      "img": img
    });
  }
  editCars() {

  }
  deleteCars(carID: string) {
    this.cars = this.cars.filter(car => {
      return car.id !== carID
    })
  }
}
