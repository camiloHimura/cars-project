const instance = require("./axios.conf")

export function getCars(){
  return instance.get("/cars")
        .then(info => info.data)
        .catch(catchError);
}

export function getCarsStockNumber(stockNumber){
  return instance.get(`/cars/${stockNumber}`)
        .then(info => info.data)
        .catch(catchError);
}

export function getAllColors(){
  return instance.get("/colors")
        .then(info => info.data.colors)
        .catch(catchError);
}

export function getAllManufacturers(){
  return instance.get("/manufacturers")
        .then(info => info.data.manufacturers)
        .catch(catchError);
}

function catchError(error){
    console.log("---- my handle error ---", error);
    throw(error);
}