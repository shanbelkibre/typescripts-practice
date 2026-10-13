class Property {
  constructor(
    public title: string,
    public prices: number,
  ) {}

  displayInfo(): string {
    return `this house is ${this.title} and prices is : ${this.prices}`;
  }
}

const property1 = new Property("Ethio house", 35000);
