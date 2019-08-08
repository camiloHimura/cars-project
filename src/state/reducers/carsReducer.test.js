import {FILTER_CARS, SORT_CARS} from '../actions/actions-types';
import carsReducer from './carsReducer';

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

describe('Filter cars', () => {
  it('return default store', () => {
    const newState = carsReducer(undefined, {});
    expect(newState).toEqual({cars: []});
  })
  
  it('return all the cars', () => {
    const newState = carsReducer(MockCars(), {});
    expect(newState).toEqual(MockCars());
  })
  
  it('filter cars by color', () => {
    let mock = MockCars();
    let redCar = mock.cars[2];
    let outcome = {totalCarsCount: 1, totalPageCount: 1, cars: [redCar]}

    const newState = carsReducer(mock, {type: FILTER_CARS, payload: {color: 'red'}});
    expect(newState).toEqual(outcome);
  })
  
  it('filter cars by manufacturer', () => {
    let mock = MockCars();
    let carBMW = mock.cars[0];
    let outcome = {totalCarsCount: 1, totalPageCount: 1, cars: [carBMW]}

    const newState = carsReducer(mock, {type: FILTER_CARS, payload: {manufacturer: 'BMW'}});
    expect(newState).toEqual(outcome);
  })

  it('filter cars by color and manufacturer', () => {
    let mock = MockCars();
    let teslaYellow = mock.cars[1];
    let outcome = {totalCarsCount: 1, totalPageCount: 1, cars: [teslaYellow]}

    const newState = carsReducer(mock, {type: FILTER_CARS, payload: {color: 'yellow', manufacturer: 'Tesla'}});
    expect(newState).toEqual(outcome);
  })
  
})

describe('', () =>{
  it('sort by mileage ASC', () => {
    let mock = MockCars();
    let [carOne, carTwo, carThree] = mock.cars;

    const newState = carsReducer(mock, {type: SORT_CARS, payload: {type: 'ASC'}});
    expect(newState.cars).toEqual([carThree, carOne, carTwo]);
  })
  
  it('sort by mileage DESC', () => {
    let mock = MockCars();
    let [carOne, carTwo, carThree] = mock.cars;

    const newState = carsReducer(mock, {type: SORT_CARS, payload: {type: 'DESC'}});
    expect(newState.cars).toEqual([carTwo, carOne, carThree]);
  })
})