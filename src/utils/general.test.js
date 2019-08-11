import {propertiesToString} from "./general";

describe("General util", () => {

  describe("propertiesToString", () => {    

    it("one property", () => {
      let data = {page: "0"}
      expect(propertiesToString(data)).toBe("page=0");
    })
    
    it("multiple properties", () => {
      let data = {page: 1, color: "red", manufacturer: "BMV"}
      expect(propertiesToString(data)).toBe("page=1&color=red&manufacturer=BMV");
    })

  })

})