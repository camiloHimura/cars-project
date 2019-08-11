export function propertiesToString (data = {}){
  let format = Object.entries(data).reduce((accum, [name, value]) => {
                if(name && (value)){
                  return `${accum}${name}=${value}&`;
                }
                return accum;
              }, "")

  return format.slice(0, format.length - 1);
}
