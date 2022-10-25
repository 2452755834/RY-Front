// import { login } from '@/api/login';
import { login } from '@/api/login';
import { getToken, setToken } from '@/utils/auth'
import { defineStore } from 'pinia'
const useUserStore = defineStore('user', {
  state: ():{
    token?:string|null;
    name:string;
    avatar:string;
    roles:any[];
    permissions:Array<string>;
  } => ({
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: []
  }),
  actions: {
    login(userInfo:{username:string, password:string, code?:string, uuid?:string}) {
      // const username = userInfo.username.trim();
      // const password = userInfo.password;
      // const code = userInfo.code;
      // const uuid = userInfo.uuid;

      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res: any) => {
            if (res.state) {
              setToken(res.token);
              this.token = res.token;
              resolve(res);
            }
          })
          .catch((error:any) => {
            reject(error);
          });
      });
    }
  }
})
export default useUserStore
