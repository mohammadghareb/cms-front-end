 import configuration from "../../Configuration/keys/index";
import { TAdminRole, TSignInData } from "../../Types";
import { post } from "../axios-post"

export const apiCallSignIn = async ({
  username,
  password
}: {
  username: string;
  password: string;
}): Promise<{
  data: TSignInData;
  status: string;
 }> => {
  
  const { data, status } = await post<{
    admin: {
      id: number;
      username: string;
      lastLogin: string;
      role: TAdminRole;
      fullName: string;
      accessToken: string;
    };
  
  }>(`login/checkCredentials`, {
    username,
    password,
    cmsVersion: configuration.version,
    environment: configuration.env
     
  });
  const emptyRole: TAdminRole = "";
  if (
    status === "OK" 
  ) { // @ts-ignore\n 

    const admin =   data.admin;
    const id =   admin.id;
    const username =  admin.username;
    const fullName =   admin.fullName;
    const role =   admin.role;
    const lastLogin =   admin.lastLogin;
    const accessToken =   admin.accessToken;
    return {
      data: {
        id,
        username,
        fullName,
        role,
        lastLogin,
         accessToken,
      },
      status: "OK",
     };
  } else if (status === "ERROR") {
     return {
      data: {
        id: -1,
        username: "",
        lastLogin: "",
        role: emptyRole,
        fullName: "",
        accessToken: "",
      },
      status: "ERROR",
     };
  } else {
    return {
      data: {
        id: -1,
        username: "",
        lastLogin: "",
        role: emptyRole,
        fullName: "",
        accessToken: "",
      },
      status: "ERROR",
     };
  }
};
