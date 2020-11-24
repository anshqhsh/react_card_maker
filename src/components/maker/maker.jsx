import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

//props 에 onLogout을 전달 , authService의 logout을 이용 FileInput
const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      //key:1,2,3으로 생성 배열로 생성할때의 속도 문제를 해결
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
    2: {
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
    3: {
      id: '3',
      name: 'LEEJH3',
      company: 'kornec',
      theme: 'colorful',
      title: 'Software Enfineer',
      email: 'anshqhsh.dev@gmail.com',
      message: 'contect me',
      fileName: 'Joon',
      fileURL: null,
    },
  }); // useState : 상태값 관리 state의 값과 state 값 세팅하는 함수 를 리턴

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  }); //authchange가 있다면 유저가 업데이트가 되고 콜백 함수가 수행 사용자가 없다면 히스토리에서 Push로 홈 이동

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };//cards를 복사해와서 업데이트되는 key를 이용해 오브젝트 전체를 변경
      updated[card.id] = card;//업데이트 되는 키를 이용해서 오브젝트 전체를 card로 바꿔줌
      return updated;
    });
  };
  
  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
