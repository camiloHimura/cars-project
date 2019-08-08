function MockCars(){
  return {
    "cars":[
      {"stockNumber":10001,"manufacturerName":"BMW","modelName":"3er","color":"yellow","mileage":{"number":133886,"unit":"km"},"fuelType":"Petrol","pictureUrl":"http://localhost:3001/car.svg"},
      {"stockNumber":10006,"manufacturerName":"Tesla","modelName":"Model X","color":"yellow","mileage":{"number":178238,"unit":"km"},"fuelType":"Petrol","pictureUrl":"http://localhost:3001/car.svg"},
      {"stockNumber":10068,"manufacturerName":"Mercedes-Benz","modelName":"SLS AMG","color":"red","mileage":{"number":132381,"unit":"km"}}
    ],
    "totalCarsCount": 1000,
    "totalPageCount": 100
  }
}

export const getCars = data => {
  return new Promise((resolve, reject) => {
      resolve(MockCars());
  })
};