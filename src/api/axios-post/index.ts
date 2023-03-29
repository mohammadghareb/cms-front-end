import axios from "axios";
import AES from "crypto-js/aes";
import configuration from "../../Configuration/keys";
import getPersonalStore from "../../Components/Stores/personal-store";
import {TApiPostResponse} from "../../Types"

export const post = async <T>(
  path: string,
  initialData: unknown
): Promise<TApiPostResponse<T>> => {
  try {
    const adminUserId = getPersonalStore().user.get().id;
    const accessToken = getPersonalStore().user.get().accessToken;

    if (adminUserId === 0) {
      return {
        data: {
           Message: ` error from post `,
         },
        status: "ERROR",
      };
    }
    let headers: { [key: string]: string | number } = {
      "Content-Type": "application/json",
      data: AES.encrypt(
        JSON.stringify({
          adminuserid: adminUserId,
          accesstoken: accessToken,
          pass: configuration.pass
        }),
        configuration.encryptData
      ).toString()
    };
    let data = {
      data: AES.encrypt(
        JSON.stringify(initialData),
        configuration.encryptData
      ).toString()
    };
    const rawData = await axios.post(`${configuration.API_URL}${path}`, data, {
      headers
    });
    const serverData =  rawData.data 
    const serverDataDefined =   serverData.data 
    const serverStatusDefined =  serverData.status 
   
    return {
      data: serverDataDefined,
      status: serverStatusDefined, 
    };
  } catch (err) {
    return {
      data: {
         Message: `Error from post ${err}`,
       },
      status: "ERROR",   
    };
  }
};
