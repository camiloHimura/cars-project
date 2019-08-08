import {FILTER_CARS, SORT_CARS} from "../actions/actions-types";

export default function carsReducer(state = {cars: []}, action){

  switch(action.type){
    case FILTER_CARS:
      const {color = false, manufacturer = false} = action.payload;
      const cars = state.cars;

      let newCards = cars.filter(car => {
                        if(color && manufacturer){
                          return car.color === color && car.manufacturerName === manufacturer;
                        }
                        if(color){
                          return car.color === color;
                        }
                        if(manufacturer){
                          return car.manufacturerName === manufacturer;
                        }
                      })
    
    return {cars: newCards, 
            totalCarsCount: newCards.length, 
            totalPageCount: newCards.length
          }
    
    case SORT_CARS:
      const {type = 'ASC'} = action.payload;
      
      const sortCards = [...state.cars].sort((carA, carB) => {
                          if(type === 'ASC'){
                            return carA.mileage.number - carB.mileage.number;
                          }else{
                            return carB.mileage.number - carA.mileage.number;
                          }
                        });
    
    return Object.assign({}, state, {cars: sortCards})

    default: 
       return state;
  }

}
