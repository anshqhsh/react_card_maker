import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
//컴포넌트 자체를 다른 컴포넌트에서 전달, 원하는 props를 ImageFileInput에 전달(확장성)
const FileInput = props => (
<ImageFileInput {...props} imageUploader={imageUploader}/>
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);