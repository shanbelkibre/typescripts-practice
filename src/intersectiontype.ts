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