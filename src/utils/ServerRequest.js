const instance = require("./axios.conf")

export function getCars(){
    return instance.get("/cars")
            .catch(catchError);
}

function catchError(error){
    console.log("---- my handle error ---", error);
    throw(error);
}