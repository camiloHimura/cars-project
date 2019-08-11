import {getCars, getAllColors, getAllManufacturers, getCarByStockNumber} from "../../utils/ServerRequest";
import {carsLoaded, colorsLoaded, manufacturersLoaded, carsByStockNumberLoaded, carsByStockNumberIsFavorite} from "./index.js"
import {propertiesToString} from "../../utils/general";
import {searchStorageId, saveStorageId, removeStorageId} from "../../utils/LocalStorage";

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

export function getCarByStockNumberAction(stockNumber, history){
  return async function(dispatch){
    try{
        let car = await getCarByStockNumber(stockNumber);
        if(car === null){
          history.replace("/notFound");
        }else{
          dispatch(carsByStockNumberLoaded(car))
        }
    }catch(error){
        console.error("error", error)
    }
  }
}

export function searchFavorite(id){
  return async function(dispatch){
    if(searchStorageId(id)){
      dispatch(carsByStockNumberIsFavorite(true))
    }else{
      dispatch(carsByStockNumberIsFavorite(false))
    }
  }
}

export function saveFavorite(id){
  return async function(dispatch){
    if(saveStorageId(id)){
      dispatch(carsByStockNumberIsFavorite(true))
    }
  }
}

export function removeFavorite(id){
  return async function(dispatch){
    if(removeStorageId(id)){
      dispatch(carsByStockNumberIsFavorite(false))
    }
  }
}

