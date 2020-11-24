import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false);//이미지 업로드시 로딩스피너 추가를 위해 로딩 state를 만들어줌

    const inputRef =useRef();
    //버튼이 클릭되면 input이 클릭된것처럼 inputRef를 사용 ->input을 꾸밀수 있는 방법이 많지않아 버튼으로 
    const onButtonClick = event =>{
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = async event => {
        setLoading(true);
        //console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]);//실행될때까지 기다렸다 uploaded에 할당
        setLoading(false);
        //console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,//바뀐파일 이름, URL
            url: uploaded.url,
        });
        };
    return (
    <div className={styles.container}>
        <input
            className={styles.input} 
            ref={inputRef} 
            type='file' 
            accept="image/*" 
            name="file"
            onChange={onChange}
            />
     {!loading && <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
        {name || 'No file'}
      </button>}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
