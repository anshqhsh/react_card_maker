import firebaseApp from './firebase';

class CardRepository{

    syncCards(userId, onUpdate){
        const ref = firebaseApp.database().ref(`${userId}/cards`);//userid 에 있는 카드틑 들을것 
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
          });
          return () => ref.off();
    }//파이어베이스에 해당 데이터가 업데이트 될떄 마다 스냅샷에 value 가 있다면 콜백함수를 호출


    saveCard(userId, card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card){
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }

}
export default CardRepository