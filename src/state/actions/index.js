import { CARS_LOADED, FILTER_CARS, SORT_CARS, COLORS_LOADED, MANUFACTURER_LOADED, CAR_BY_STOCK_NUMBER_ISFAVORITE,
            FILTERS_SELECTED, PAGE_SELECTED, SORT_SELECTED, CAR_BY_STOCK_NUMBER_LOADED, SET_PAGE_SELECTED} from "./actions-types";

export {getAllCars, getColors, getManufacturers, getCarByStockNumberAction,
        searchFavorite, saveFavorite, removeFavorite} from "./asyncCarsAction";

export function carsLoaded(payload) {
  return {type: CARS_LOADED, payload}
}

export function carsByStockNumberLoaded(payload) {
  return {type: CAR_BY_STOCK_NUMBER_LOADED, payload}
}

export function carsByStockNumberIsFavorite(payload) {
  return {type: CAR_BY_STOCK_NUMBER_ISFAVORITE, payload}
}

export function colorsLoaded(payload) {
  return {type: COLORS_LOADED, payload}
}

export function manufacturersLoaded(payload) {
  return {type: MANUFACTURER_LOADED, payload}
}

export function filterCard(payload) {
  return {type: FILTER_CARS, payload}
}

export function sortCard(payload) {
  return {type: SORT_CARS, payload}
}

export function filtersSelected(payload) {
  return {type: FILTERS_SELECTED, payload}
}

export function pageSelected() {
  return {type: PAGE_SELECTED}
}

export function setPage(payload) {
  return {type: SET_PAGE_SELECTED, payload}
}

export function sortSelected(payload) {
  return {type: SORT_SELECTED, payload}
}
