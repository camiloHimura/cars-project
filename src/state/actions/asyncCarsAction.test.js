import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getAllCars, getColors, getManufacturers, 
      getCarByStockNumberAction, searchFavorite, saveFavorite, removeFavorite} from './asyncCarsAction';

      import {CARS_LOADED, COLORS_LOADED, MANUFACTURER_LOADED, 
  CAR_BY_STOCK_NUMBER_LOADED, CAR_BY_STOCK_NUMBER_ISFAVORITE} from './actions-types';

jest.mock('../../utils/ServerRequest'); 

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

fdescribe('async actions', () => {
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
  
  it('getAllColor', () => {
    return store.dispatch(getColors())
      .then(() => {
        const [firstAction] = store.getActions();
        expect(firstAction.type).toBe(COLORS_LOADED);
      });
  })
  
  it('getAllManufacturers', () => {
    return store.dispatch(getManufacturers())
      .then(() => {
        const [firstAction] = store.getActions();
        expect(firstAction.type).toBe(MANUFACTURER_LOADED);
      });
  })
  
  it('getCarByStockNumberAction', () => {
    return store.dispatch(getCarByStockNumberAction())
      .then(() => {
        const [firstAction] = store.getActions();
        expect(firstAction.type).toBe(CAR_BY_STOCK_NUMBER_LOADED);
      });
  })

  it('searchFavorite localStorage', () => {
    return store.dispatch(searchFavorite(1))
      .then(() => {
        const [firstAction] = store.getActions();
        expect(firstAction.type).toBe(CAR_BY_STOCK_NUMBER_ISFAVORITE);
      });
  })

  it('saveFavorite localStorage', () => {
    return store.dispatch(saveFavorite(2))
      .then(() => {
        const [firstAction] = store.getActions();
        expect(firstAction.type).toBe(CAR_BY_STOCK_NUMBER_ISFAVORITE);
      });
  })

  it('removeFavorite localStorage', () => {
    return store.dispatch(removeFavorite(1))
      .then(() => {
        const [firstAction] = store.getActions();
        expect(firstAction.type).toBe(CAR_BY_STOCK_NUMBER_ISFAVORITE);
      });
  })

})