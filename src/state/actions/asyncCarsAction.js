import {getCars, getAllColors, getAllManufacturers, getFilterSortPageCars} from "../../utils/ServerRequest";
import {carsLoaded, colorsLoaded, manufacturersLoaded} from "./index.js"
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

export function filterSortPage(data){
  return async function(dispatch){
    const {manufacturer, color, sort, page} = data;

    try{
        let cars = await getFilterSortPageCars(data);
        dispatch(carsLoaded(cars))
    }catch(error){
        console.error("error", error)
    }
  }
}

