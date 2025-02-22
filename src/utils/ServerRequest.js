const instance = require("./axios.conf")

export function getCars(params = ""){
  return instance.get(`/cars?${params}`)
        .then(info => info.data)
        .catch(catchError);
}

export function getCarByStockNumber(stockNumber){
  return instance.get(`/cars/${stockNumber}`)
        .then(info => info.data.car)
        .catch(error => {
          if(error.response.status === 404){
            return null;
          }
        });
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
