import SessionStorageService from './SessionStorageService.js';
import AuthenticationService from './AuthenticationService.js';
import { SESSION_NAME } from '../config/session.js';
class SessionTimeService {
	//Minutes
	static sessionTime = 120;

	static validDate(dateInit, dateEnd){
		return (Date.parse(dateInit) < Date.parse(dateEnd));
	}
	static estimatedTime(){
		var currentDate = new Date();
		currentDate.setMinutes(currentDate.getMinutes()+this.sessionTime);
		return currentDate;
	}
	static renewSession(){
		var sessionObject = SessionStorageService.get(SESSION_NAME);
		if(sessionObject!=null){
			sessionObject.expiresAt = this.estimatedTime();
			SessionStorageService.set(SESSION_NAME,sessionObject);
		}
	}
	static innactivityTime(){
		return new Promise((resolve,reject)=>{
			var currentDate = new Date();
			var sessionObject = SessionStorageService.get(SESSION_NAME);
			var expirationDate = sessionObject.expiresAt;
			if(!this.validDate(currentDate,expirationDate)){
				//Remover la session de no tener
				AuthenticationService.logout();
				resolve();
			}else{
				//Renovar la session
				sessionObject.expiresAt = this.estimatedTime();
				SessionStorageService.set(SESSION_NAME,sessionObject);
			}
		});
	}
}
export default SessionTimeService;