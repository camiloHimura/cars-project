import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getAllCars} from './asyncCarsAction';
import {CARS_LOADED} from './actions-types';

jest.mock('../../utils/ServerRequest'); 

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async actions', () => {
  var store;

  beforeEach(() => {
      const initialState = {};
      store = mockStore(initialState);
  });
  
  afterEach(() => {
      store.clearActions();
  });

  it('getAllCars', () => {
      return store.dispatch(getAllCars())
        .then(() => {
          const [firstAction] = store.getActions();
          expect(firstAction.type).toBe(CARS_LOADED);
        });
  })

})