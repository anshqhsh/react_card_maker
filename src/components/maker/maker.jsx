import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

//props 에 onLogout을 전달 , authService의 logout을 이용
const Maker = ({ authService }) => {
        const history = useHistory();
        const onLogout = () => {
            authService.logout();
        };
        
    useEffect(() => {
        authService.onAuthChange(user =>{
            if(!user) {
                history.push('/');
            }
        });
    });//authchange가 있다면 유저가 업데이트가 되고 콜백 함수가 수행 사용자가 없다면 히스토리에서 Push로 홈 이동
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor />
                    <Preview />
                </div>
            <Footer />
        </section>
    );
};

export default Maker;