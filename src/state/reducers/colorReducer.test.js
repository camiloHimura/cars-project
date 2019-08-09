import {COLORS_LOADED} from '../actions/actions-types';
import colorReducer from './colorReducer';

function MockColors(){
  return ["white", "Red", "Blue"]
}

describe('Load Colors', () =>{
  it('Info loaded', () => {
    let mock = MockColors();

    const newState = colorReducer(undefined, {type: COLORS_LOADED, payload: mock});
    expect(newState).toEqual(mock);
  })
})

