export function extractPrimitives(array : any[], primitivesArray : Omit<any, 'object'>[] = []) : Omit<any, 'object' | 'null'| 'undefined'>[] { 
  array.forEach(item => {
      if (Array.isArray(item)) {
          extractPrimitives(item, primitivesArray);
      } else if (typeof item === 'object' && item !== null) {
          extractPrimitives(Object.values(item), primitivesArray);
      } else {
          primitivesArray.push(item);
      }
  });
  return primitivesArray.filter((item)=>item !== null);
}
