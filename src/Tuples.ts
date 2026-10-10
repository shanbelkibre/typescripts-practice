// [number, string, boolean]
let propertyInfo: [number, string, boolean];

propertyInfo = [1, "Modern House", true]; // Valid

// Error: wrong order
// propertyInfo = ["Modern House", 1, true];


// commonly use in function is return fix array of type elements
function getProperty(): [number, string] {
  return [101, "Modern House"];
}

const [id, title] = getProperty();