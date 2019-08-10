import {carsByStockNumberLoaded} from '../actions';
import carByStockNumber from './carByStockNumber';

const mockData = {"stockNumber":10001,"manufacturerName":"BMW","modelName":"3er","color":"yellow","mileage":{"number":133886,"unit":"km"},"fuelType":"Petrol","pictureUrl":"http://localhost:3001/car.svg"};
const mockDataTwo = Object.assign(mockData, {stockNumber: 10002, manufacturerName: "Audi", color: "red"});
describe('carByStockNumber', () =>{
  it('Default values', () => {
    const newState = carByStockNumber(undefined, carsByStockNumberLoaded());
    expect(newState).toEqual({});
  })
  
  it('car loaded', () => {
    const newState = carByStockNumber(undefined, carsByStockNumberLoaded(mockData));
    expect(newState).toEqual(mockData);
  })

  it('card updated', () => {
    const newState = carByStockNumber(mockData, carsByStockNumberLoaded(mockDataTwo));
    expect(newState).toEqual(mockDataTwo);
  })

})
