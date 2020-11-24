import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

//props 에 onLogout을 전달 , authService의 logout을 이용 FileInput
const Maker = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory().state;//로그인 데이터를 가져옴 
  const [cards, setCards] = useState({}); // useState : 상태값 관리 state의 값과 state 값 세팅하는 함수 를 리턴
  const [userId, setUserId] = useState(historyState && historyState.id);//히스토리에서 전달하는 아이디값을 maker 컴포넌트안에서 state로 저장 //히스토리 스테이트가 있으면 안의 id를 사용
 

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();// 컴포넌트가 언마운트 되었을때 메모리를 정리 
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid)
      }
      else{ 
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
    cardRepository.saveCard(userId, card);
  };
  
  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
