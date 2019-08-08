import {getCars} from "../../utils/ServerRequest";
import {carsLoaded} from "./index.js"

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
