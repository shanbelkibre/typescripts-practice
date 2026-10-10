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

// interface — defines an object's structure.
// readonly — prevents reassignment of id through this property at compile time.
// ? — makes description optional.
// extends — reuses Property fields in House.
// TypeScript checks that house follows the House contract.


//  interface with method and class 

interface PropertyService {
  findById(id: number): Property | null;
}

class PropertyManager implements PropertyService {
  findById(id: number): Property | null {
    return null;
  }
}