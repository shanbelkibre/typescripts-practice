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