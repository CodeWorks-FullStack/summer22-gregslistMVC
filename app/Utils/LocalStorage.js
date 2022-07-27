import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";



export function saveState(){
  console.log('saving');
  // NOTE for each collection on the database we want to save we will repeat this
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
  // ------------------
}

export function loadState(){
  console.log('loading')
  // NOTE for each collection was save and want to load out repeat this
  let rawCars = localStorage.getItem('cars')
  if(rawCars){
    let carData = JSON.parse(rawCars)
    console.log(carData);
    // NOTE cars come out of the local storage as just regular objects, so we have to convert them all back into 'Car' objects.  Map creates a copy of the array from the 'result' of the call back or in this cas the 'new Car(c)'
    ProxyState.cars = carData.map(c => new Car(c))
  }
  // ----------------------------
}