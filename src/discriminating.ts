type Property = {
  id: number;
  title: string;
};

type PropertyResult =
  | { status: "success"; property: Property }
  | { status: "not_found"; message: string };

function getPropertyResult(): PropertyResult {
  return {
    status: "not_found",
    message: "Property not found",
  };
}

function handlePropertyResult(result: PropertyResult) {
  if (result.status === "success") {
    console.log(result.property.title);
  } else {
    console.log(result.message);
  }
}

//  this is  what we call  type narrowing

interface Logger {
  log(message: string): void;
}

interface PropertyRepository {
  findById(id: number): string | null;
}

class PropertyService implements Logger, PropertyRepository {
  log(message: string): void {
    console.log(message);
  }

  findById(id: number): string | null {
    return id === 1 ? "Modern House" : null;
  }
}