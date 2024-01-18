// user.interface.ts
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    dob: string;
    gender: string | null;
    password: string;
    confirmPassword: string;
  }
  