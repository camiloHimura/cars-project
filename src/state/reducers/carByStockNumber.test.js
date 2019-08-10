import {carsByStockNumberLoaded, carsByStockNumberIsFavorite} from '../actions';
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

  it('send is car favorite', () => {
    let newObj = Object.assign({}, mockData, {isFavorite: true});
    const newState = carByStockNumber(mockData, carsByStockNumberIsFavorite(true));
    expect(newState).toEqual(newObj);
  })

  it('remove favorite card', () => {
    let newObj = Object.assign({}, mockData, {isFavorite: true});
    let expectedObj = Object.assign({}, newObj, {isFavorite: false});
    const newState = carByStockNumber(newObj, carsByStockNumberIsFavorite(false));
    expect(newState).toEqual(expectedObj);
  })

})
