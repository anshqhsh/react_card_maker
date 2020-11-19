import firebace from 'firebase'

class AuthService{//로그인과 로그아웃을 담당하는 클래스 
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}Authprovider`];//providername = google, git, etc...
        return firebase.auth().signInWithPopup(authProvider)
    }
}

export default AuthService