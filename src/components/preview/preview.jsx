import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css'

const Preview = ({cards}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1>
        <ul className={styles.cards}>
             {cards.map(card =>( //카드로 받아온 값을 원하는 컴포넌트로 생성 
                <Card card={card} /> //Card라는 props안에 card object를 전달
            ))}
        </ul>
    </section>
);        
export default Preview;