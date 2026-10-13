// Named Function

function calculateTotal(price: number, tax: number) {
  return price + price * tax;
}

// Arrow function

const displayName = (name: string, age: number): string => {
  return `my name is ${name} and I am {age} years old`;
};

// reusable function this is use either Arrow function or Expression function not for normal function

type stringModifier = (name: string) => string;
const displayInfo: stringModifier = (name: string) => {
  return `your name is ${name}`;
};
