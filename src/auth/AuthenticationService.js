import API_BASE_URL from '../config/api.pedidos.js';

import SessionStorageService from './SessionStorageService.js';
import SessionTimeService from './SessionTimeService.js';
import { SESSION_NAME } from '../config/session.js';
import { log } from 'util';

class AuthenticationService {
    static isAuthenticated = false;

    static userData;

    static headers={
        'Content-Type':'application/json',
        'X-Requested-With':'XMLHttpRequest',
    }

    static login(obj){
        return new Promise((resolve,reject)=>{
            const requestUrl =`${API_BASE_URL}/login`;
            const requestData = {
                user:obj.user,
                password:obj.password
            }
            fetch(requestUrl,{
                method:'POST',
                body:JSON.stringify(requestData),
                headers:this.headers
            }).then((response) => {
                if(response.ok){
                    var data = response.json();
                    data.then((res)=>{
                        this.isAuthenticated = true
                        this.userData = res
                        SessionStorageService.set(SESSION_NAME,{expiresAt:SessionTimeService.estimatedTime(),value:res})
                        resolve(res)
                    });
                }else{
                    reject(response)
                }
            }).catch((error)=>log(error));
        });
    }

    static isUserAuthenticated(){
        const userData = SessionStorageService.get(SESSION_NAME);
        this.isAuthenticated = (!!userData && typeof userData.value.token === 'string');
        //Authenticated api token
       
        return this.isAuthenticated;
    }

    static logout () {
        return new Promise((resolve,reject)=>{
            this.isAuthenticated = false;
            this.userData = null;
            SessionStorageService.remove(SESSION_NAME);
            resolve();
        });
    }
}

export default AuthenticationService;