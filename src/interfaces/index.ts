export type UserModel = {
  fullname: string;
  university: string;
  phone_number: string;
  email: string;
  password: string;
  confirm: string;
};

export type IdeasModel = {
  id: string;
  title: string;
  abstract: string;
  description: string;
  images: string[];
  user: string;
};
