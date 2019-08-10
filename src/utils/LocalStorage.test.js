import {STORAGE_FAVORITES, searchStorageId, saveStorageId, removeStorageId, getItemsParse} from './LocalStorage';
import LocalStorageMock from "./__mocks__/LocalStorageMock";

global.localStorage = new LocalStorageMock;

describe("LocalStorage Action test", () =>{
  beforeEach(() =>{
    localStorage.removeItem(STORAGE_FAVORITES);
  })

  it("has favorites", () =>{
    expect(searchStorageId(0)).toBe(null);
  })
  
  it("save new favorite", () =>{    
    expect(saveStorageId(1)).toBe(true);
  })
  
  it("save id", () =>{    
    saveStorageId(2);
    expect(getItemsParse(STORAGE_FAVORITES)).toStrictEqual([2]);
  })

  it("search id", () =>{    
    saveStorageId(1);
    saveStorageId(2);
    saveStorageId(3);
    expect(searchStorageId(2)).toBe(true);
  })
  
  it("remove id without favorite", () =>{    
    expect(removeStorageId(1)).toBe(null);
  })
  
  it("remove id", () => {
    saveStorageId(1);
    saveStorageId(2);
    saveStorageId(3);
    saveStorageId(4);
    saveStorageId(5);
    removeStorageId(2)
    expect(getItemsParse(STORAGE_FAVORITES)).toStrictEqual([1,3, 4, 5]);
  })
})