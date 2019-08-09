import {getCars, getAllColors, getAllManufacturers} from "../../utils/ServerRequest";
import {carsLoaded, colorsLoaded, manufacturersLoaded} from "./index.js"

export function getAllCars(){
    return async function(dispatch){
        try{
            let cars = await getCars();
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
