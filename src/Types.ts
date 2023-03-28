export type TAdminRole =
  | "CEO"
  | "CTO"
  | "Developer"
  | "QA"
  | "Customer Support"
  | "";


export type TAdmin = {
    id: number;
    username: string;
    fullName: string;
    role: TAdminRole;
    lastLogin: string;
    accessToken: string;
  };