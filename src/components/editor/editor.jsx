import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map(key => (
     //오브젝트값으로 받아오기 때문에 cards.map(card=>) -> Object.keys(cards).map(key) cards 오브젝트의 모든 키들을 받아옴 그 키를 돌림 1,2,3
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}

    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);
export default Editor;
