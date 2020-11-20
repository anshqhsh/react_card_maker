import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {//({authService}) props에 authService를 전달
    //onlogin에 arrow fuc을 할당해 콜백 onclick에 {onLogin에서 함수를 불러옴}
    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)//login은 provider를 전달 받아야함, 현재 발생하는 event안의 textContent를 읽어와서 login(providerName) 넣어줌  
        .then(console.log);
    };
    
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