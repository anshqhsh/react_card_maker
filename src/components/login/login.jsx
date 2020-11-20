import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {//({authService}) props에 authService를 전달
    //onlogin에 arrow fuc을 할당해 콜백 onclick에 {onLogin에서 함수를 불러옴}
    //화면에서 다른 라우터로 가기위함
    const history = useHistory();
    //Maker 화면으로 이동 
    const goToMaker = (userId) =>{
        history.push({//{}추가정보를 입력하고 싶으면 오브젝트를 이용 
            pathname: '/maker',
            state: {id: userId},//component에서 받아 옴 
        });
    };
    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)//login은 provider를 전달 받아야함, 현재 발생하는 event안의 textContent를 읽어와서 login(providerName) 넣어줌  
        .then(data => goToMaker(data.user.uid));//로그인이 되면 데이터안에 있는 user안의 uid를 전달 
    };
    //사용자가 바뀌게 되면 사용자가 있다면 gotomaker로 이동 
    useEffect(()=>{
        authService
        .onAuthChange(user =>{
            user && goToMaker(user.uid);
        });
    });
    
    
    return(
        <section className={styles.login}>
            <Header/>
                <section>
                    <h1>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button className={styles.button} onClick = {onLogin}>Google</button>
                        </li>
                        <li className={styles.item}>
                            <button className={styles.button} onClick = {onLogin}>Github</button>
                        </li>
                    </ul>
                </section>
            <Footer/>
        </section>
    );
}
export default Login;