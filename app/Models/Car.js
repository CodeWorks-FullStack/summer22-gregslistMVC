import { generateId } from '../Utils/generateId.js'


export class Car{
  constructor({make, model, year, price, img, description}){
    // NOTE we need an ID for this so that each car has a guaraSnteed unique identifier
    this.id = generateId()
    this.make = make,
    this.model = model,
    this.year = year, 
    this.price = price,
    this.img = img,
    this.description = description
  }

  // constructor(data){
  //   this.make = data.make,
  //   this.model = data.model,
  //   this.year = data.year, 
  //   this.price = data.price,
  //   this.img = data.img,
  //   this.description = data.description
  // }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.make} | ${this.model} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}