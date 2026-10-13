type Property = {
  id: number;
  title: string;
  price: number;
  city: string;
  propertyType: string;
};

function displayProperty(property: Property) {
  console.log(property.title);
}


displayProperty({
  id: 1,
  title: "Modern House",
  price: 2500000,
  city: "Addis Ababa",
  propertyType: "House"
});