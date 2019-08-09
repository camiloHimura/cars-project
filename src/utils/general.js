export function propertiesToString (data = {}){
  return Object.entries(data).reduce((accum, [name, value]) => {
            if(name && value){
              return `${accum}${name}=${value}&`;
            }
            return accum;
          }, "")
}
