import {sortSelected} from '../actions';
import sortSelectedReducer from './sortSelectedReducer';

describe('sortSelectedReducer', () =>{
  it('Default values', () => {
    const newState = sortSelectedReducer(undefined, sortSelected());
    expect(newState).toEqual({});
  })
  
  it('sort selected', () => {
    const newState = sortSelectedReducer(undefined, sortSelected({label: "Mileage ASC", value:"asc"}));
    expect(newState).toEqual({label: "Mileage ASC", value:"asc"});
  })
  it('change previus value', () => {
    const newState = sortSelectedReducer({label: "Mileage ASC", value:"asc"}, sortSelected({label: "Mileage DESC", value:"desc"}));
    expect(newState).toEqual({label: "Mileage DESC", value:"desc"});
  })

})
