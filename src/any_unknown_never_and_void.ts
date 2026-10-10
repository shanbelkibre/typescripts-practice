// No TypeScript error because use any type this allow alltype of datatypes
// this is not good practice to use any type in typescript


let value: any = "Hello";
value = 100;
value.toUpperCase(); 


// value is unknown more safe than any because it does not allow alltype of datatypes

let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}


// void is used for functions that do not return anything

function logMessage(message: string): void {
  console.log(message);
}

// never is used for functions that never return anything

function throwError(message: string): never {
  throw new Error(message);
}
