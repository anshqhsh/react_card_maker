import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout(){
    firebase.auth().signOut();
  }
  //callback함수를 받는 OnauthChange함수 : 사용자가 바꼈을때 원하는 행동을 취함 
  onAuthChange(onUserChanged){
    firebase.auth().onAuthStateChanged(user =>{
      onUserChanged(user);
    })
  }
}

export default AuthService;
