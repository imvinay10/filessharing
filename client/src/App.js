// import logo from './logo.svg';
import react, { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './service/api.js';


function App() {
  const [file, setFile] = useState('');
  const fileInputRef = useRef();
  const logo = "https://mcn-images.bauersecure.com/wp-images/222301/1440x960/himalayan-details_74.jpg?mode=max&quality=90&scale=down";
  const [result, setResult] = useState();
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  function fileInputFunction() {
    fileInputRef.current.click();
  };

  return (
    <div className='container'>
      {/* <img src={logo} alt='banner' /> */}
      <div className='wrapper'>
        <h1>My Simple File Sharing Web App</h1>
        <p>Upload And Share the link</p>
        <button onClick={fileInputFunction}> Upload</button>
        <input type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: 'none' }}
        ></input>

        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
