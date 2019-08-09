import {MANUFACTURER_LOADED} from '../actions/actions-types';
import manufacturerReducer from './manufacturerReducer';

function MockColors(){
  return [{name: "Audi", models: [{name: "100"}, {name: "200"}]},
          {name: "BMW", models: [{name: "100"}, {name: "200"}]}]
}

describe('ManufacturerLoaded', () =>{
  it('Info loaded', () => {
    let mock = MockColors();

    const newState = manufacturerReducer(undefined, {type: MANUFACTURER_LOADED, payload: mock});
    expect(newState).toEqual(mock);
  })
})

