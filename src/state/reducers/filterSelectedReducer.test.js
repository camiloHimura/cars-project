import {filtersSelected} from '../actions';
import selectedFiltersReducer from './filterSelectedReducer';

describe('selectedFiltersReducer', () =>{
  it('Default values', () => {
    const newState = selectedFiltersReducer(undefined, filtersSelected());
    expect(newState).toEqual({manufacturer: false, color: false});
  })
  
  it('color selected', () => {
    const newState = selectedFiltersReducer(undefined, filtersSelected({color: "red"}));
    expect(newState).toEqual({manufacturer: false, color: "red"});
  })

  it('manufacturer selected', () => {
    const newState = selectedFiltersReducer(undefined, filtersSelected({manufacturer: "BMW"}));
    expect(newState).toEqual({manufacturer: "BMW", color: false});
  })
  
  it('color and manufacturer selected', () => {
    const newState = selectedFiltersReducer(undefined, filtersSelected({color: "red", manufacturer: "BMW"}));
    expect(newState).toEqual({color: "red", manufacturer: "BMW"});
  })

  it('color and manufacturer selected with previus value', () => {
    const initialState = {color: "red", manufacturer: "BMW"};
    const newState = selectedFiltersReducer(initialState, filtersSelected({color: "blue"}));
    expect(newState).toEqual({color: "blue", manufacturer: "BMW"});
  })
})
