type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type Property = {
  id: number;
  title: string;
};

const response: ApiResponse<Property> = {
  success: true,
  data: {
    id: 1,
    title: "House in Addis Ababa",
  },
};