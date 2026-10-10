interface Property {
  readonly id: number;
  title: string;
  price: number;
  description?: string;
}

interface House extends Property {
  city: string;
}

const house: House = {
  id: 1,
  title: "Modern House",
  price: 5000000,
  city: "Addis Ababa",
};