import {pageSelected, setPage} from '../actions';
import pageSelectedReducer from './pageSelectedReducer';

describe('pageSelectedReducer', () =>{
  it('Default values', () => {
    const newState = pageSelectedReducer(undefined, pageSelected());
    expect(newState).toEqual(1);
  })
  
  it('page selected', () => {
    const newState = pageSelectedReducer(undefined, setPage(2));
    expect(newState).toEqual(2);
  })
  it('change previus value', () => {
    const newState = pageSelectedReducer(1, setPage(2));
    expect(newState).toEqual(2);
  })

})
