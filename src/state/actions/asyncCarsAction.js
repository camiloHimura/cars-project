import {getCars, getAllColors, getAllManufacturers, getCarByStockNumber} from "../../utils/ServerRequest";
import {carsLoaded, colorsLoaded, manufacturersLoaded, carsByStockNumberLoaded} from "./index.js"
import {propertiesToString} from "../../utils/general";

export function getAllCars(filterSelected = {}, sortSelected = {}, pageSelected){
  return async function(dispatch){
    const {color, manufacturer = {}} = filterSelected;
    const params = propertiesToString({color, manufacturer: manufacturer.name, sort: sortSelected.value, page: pageSelected});

    try{
      let cars = await getCars(params);
        dispatch(carsLoaded(cars))
    }catch(error){
        console.error("error", error)
    }
  }
}

export function getColors(){
  return async function(dispatch){
    try{
        let colors = await getAllColors();
        dispatch(colorsLoaded(colors))
    }catch(error){
        console.error("error", error)
    }
  }
}

export function getManufacturers(){
  return async function(dispatch){
    try{
        let manufacturers = await getAllManufacturers();
        dispatch(manufacturersLoaded(manufacturers))
    }catch(error){
        console.error("error", error)
    }
  }
}

export function getCarByStockNumberAction(stockNumber){
  return async function(dispatch){
    try{
        let car = await getCarByStockNumber(stockNumber);
        dispatch(carsByStockNumberLoaded(car))
    }catch(error){
        console.error("error", error)
    }
  }
}

