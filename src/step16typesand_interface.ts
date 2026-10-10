// Interface: commonly used for object contracts
interface Property {
  id: number;
  title: string;
}

// Type: objects, unions, and more
type PropertyStatus = "available" | "sold" | "rented";

type PropertyWithStatus = {
  id: number;
  status: PropertyStatus;
};


