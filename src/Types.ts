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

  
export type TPage =
| ""
| "LOGIN"
;

export type TError = {
  Message: string;

};
export type TApiPostResponse<T> = {
data: T | TError;
status: "OK" | "ERROR";
};

export type TSignInData = {
  id: number;
  username: string;
  lastLogin: string;
  role: TAdminRole;
  fullName: string;
  accessToken: string;

};