import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './CanvasComponent'
import CanvasComponent from './CanvasComponent';

const Decryptor = () => {
  const canvasRef = useRef(null);
  return (
    <div className="page-container">
      <Link to="/" className="go-back-button">Go Back</Link>

      <h1>Decryptor</h1>

      <div className="canvas-container">
        <CanvasComponent ref={canvasRef} width={800} height={400} className="canvas" />
      </div>

      <div id="uploadedFileArea">
        <h4>Upload File</h4>
        <input type="file" />
      </div>

      <button>Decrypt</button>

      <div id="decryptedFileArea">
        <h4>Decrypted File</h4>
      </div>

      <button>Download Decrypted File</button>
    </div>
  );
};

export default Decryptor;