import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Decryptor = () => {
  const canvasRef = useRef(null);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-drawing.png';
    link.click();
  };

  return (
    <div className="page-container">
      <Link to="/" className="go-back-button">{'<'} Go Back</Link>

      <h1>Decryptor</h1>

      <div className="canvas-container">
        <canvas ref={canvasRef} width={800} height={400} className="canvas" />
        <button onClick={handleClearCanvas} className="canvas-clear-button">
          Clear Canvas
        </button>
        <button onClick={handleSaveCanvas} className="canvas-save-button">
          Save Drawing
        </button>
      </div>

      <div id="uploadedFileArea">
        <h4>Upload File</h4>
        <input type="file" />
      </div>

      <button>Decrypt</button>

      <div id="decryptedFileArea">
        <h4>Decrypted File</h4>
        <input type="file" />
      </div>

      <button>Download Decrypted File</button>
    </div>
  );
};

export default Decryptor;