import {firebaseAuth, githubProvider, googleProvider} from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName)//provider이름을 전달하면 해당하는 provider를 전달//this(class)에 provider를 호출해서 대상을 받음  
    return firebaseAuth.signInWithPopup(authProvider);
  }
  logout(){
    firebaseAuth.signOut();
  }
  //callback함수를 받는 OnauthChange함수 : 사용자가 바꼈을때 원하는 행동을 취함 
  onAuthChange(onUserChanged){
    firebaseAuth.onAuthStateChanged(user =>{
      onUserChanged(user);
    })
  }
  getProvider(providerName){
    switch(providerName){
      case 'Google' :
      return googleProvider;
      case 'Github' : 
      return githubProvider;
      default :
      throw new Error(`not supported provider: ${providerName}`);//아닐땐 에러 
    }
  }
}

export default AuthService;
