import {storageAvailable} from './validators';
export const STORAGE_FAVORITES = "autoOneFavorites"

export function searchStorageId(id){
  let favorites = getItemsParse(STORAGE_FAVORITES);
  if(favorites == null){
    return null;
  }

  return favorites.some(favoritesId => favoritesId === id);
}

export function saveStorageId(id){
  let favorites = getItemsParse(STORAGE_FAVORITES);
  if(favorites == null){
    setItem(STORAGE_FAVORITES, JSON.stringify([id]));
    return true
  }

  if(!isAlreadySaved(favorites, id)){
    let stringFavrites = JSON.stringify([...favorites, id]);
    setItem(STORAGE_FAVORITES, stringFavrites);
  }

  return true
}

export function removeStorageId(id){
  let favorites = getItemsParse(STORAGE_FAVORITES);
  if(favorites == null){
    return null;
  }
  
  if(isAlreadySaved(favorites, id)){
    let newFavorites = favorites.filter(intertnalId => intertnalId != id);
    let stringFavrites = JSON.stringify(newFavorites);
    setItem(STORAGE_FAVORITES, stringFavrites);
  }

  return true
}

export function getItemsParse(key){
  let favorites = getItem(key);
  return JSON.parse(favorites);
}

export function setItem(key, value){
  if(storageAvailable()){
    localStorage.setItem(key, value)
  }else{
    throw "Local Storage Unavailable"
  }
}

export function getItem(key){
  if(storageAvailable()){
    return localStorage.getItem(key)
  }else{
    throw "Local Storage Unavailable"
  }
}

function isAlreadySaved(array, id) {
  return array.some(internalId => internalId == id);
}


