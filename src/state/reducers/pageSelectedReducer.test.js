import {pageSelected} from '../actions';
import pageSelectedReducer from './pageSelectedReducer';

describe('pageSelectedReducer', () =>{
  it('Default values', () => {
    const newState = pageSelectedReducer(undefined, pageSelected());
    expect(newState).toEqual(0);
  })
  
  it('page selected', () => {
    const newState = pageSelectedReducer(undefined, pageSelected(1));
    expect(newState).toEqual(1);
  })
  it('change previus value', () => {
    const newState = pageSelectedReducer(1, pageSelected(2));
    expect(newState).toEqual(2);
  })

})
