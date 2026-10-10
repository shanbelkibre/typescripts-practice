type User = {
  id: number;
  name: string;
};

type PropertyAgent = {
  licenseNumber: string;
};

type Agent = User & PropertyAgent;

const agent: Agent = {
  id: 1,
  name: "Abebe",
  licenseNumber: "AG-101",
};

// becausere full when combine similar properties seen this example

type A = { id: number };
type B = { id: string };

type Combined = A & B; // id becomes never