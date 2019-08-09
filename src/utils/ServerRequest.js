const instance = require("./axios.conf")

export function getCars(params = ""){
  return instance.get(`/cars?${params}`)
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

export function getFilterSortPageCars(data){
  return instance.get(`/cars/${data}`)
        .then(info => info.data)
        .catch(catchError);
}

function catchError(error){
    console.log("---- my handle error ---", error);
    throw(error);
}
