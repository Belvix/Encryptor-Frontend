import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './CanvasComponent'
import CanvasComponent from './CanvasComponent';

const Encryptor = () => {
  const canvasRef = useRef(null);
  return (
    <div className="page-container">
      {/* <Link to="/" className="go-back-button">{'<'} Go Back</Link> */}
      <Link to="/" className="go-back-button" style={{ backgroundColor: 'red', border: '2px solid black' }}>
        {'<'} Go Back
      </Link>

      <h1>Encryptor</h1>

      <div className="canvas-container">
        <CanvasComponent ref={canvasRef} width={800} height={400} className="canvas" />
      </div>

      <div id="uploadedFileArea">
        <h4>Upload File</h4>
        <input type="file" />
      </div>

      <button>Encrypt</button>

      <div id="encryptedFileArea">
        <h4>Encrypted File</h4>
        {/* <input type="file" /> */}
      </div>

      <button>Download Encrypted File</button>
    </div>
  );
};

export default Encryptor;