import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

//props 에 onLogout을 전달 , authService의 logout을 이용
const Maker = ({ authService }) => {
        const [cards, setCards] = useState([
            {
                id: '1',
                name: 'LEEJH1',
                company: 'kornec',
                theme: 'dark',
                title: 'Software Enfineer',
                email: 'anshqhsh.dev@gmail.com',
                message: 'contect me',
                fileName: 'Joon',
                fileURL: null,
            },
            {
                id: '2',
                name: 'LEEJH2',
                company: 'kornec',
                theme: 'light',
                title: 'Software Enfineer',
                email: 'anshqhsh.dev@gmail.com',
                message: 'contect me',
                fileName: 'Joon',
                fileURL: null,
            },
            {
                id: '3',
                name: 'LEEJH3',
                company: 'kornec',
                theme: 'colorful',
                title: 'Software Enfineer',
                email: 'anshqhsh.dev@gmail.com',
                message: 'contect me',
                fileName: 'Joon',
                fileURL: null,
            }
        ]); // useState : 상태값 관리 state의 값과 state 값 세팅하는 함수 를 리턴
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

    const addCard = card => {
        const updated=[...cards,card];
        setCards(updated)//state API
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor cards ={cards} addCard={addCard}/>
                    <Preview cards ={cards}/>
                </div>
            <Footer />
        </section>
    );
};

export default Maker;