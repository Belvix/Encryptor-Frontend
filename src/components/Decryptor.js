import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Decryptor = () => {
  const canvasRef = useRef(null);

  // Handle clearing the canvas
  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Handle saving the drawing
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
      {/* Go Back Button */}
      <Link to="/" className="go-back-button">{'<'} Go Back</Link>

      <h1>Decryptor</h1>

      {/* Canvas for drawing */}
      <div className="canvas-container">
        <canvas ref={canvasRef} width={800} height={400} className="canvas" />
        <button onClick={handleClearCanvas} className="canvas-clear-button">
          Clear Canvas
        </button>
        <button onClick={handleSaveCanvas} className="canvas-save-button">
          Save Drawing
        </button>
      </div>

      {/* File upload section */}
      <div id="uploadedFileArea">
        <h4>Upload File</h4>
        <input type="file" />
      </div>

      {/* Decrypt Button */}
      <button>Decrypt</button>

      {/* Decrypted File section */}
      <div id="decryptedFileArea">
        <h4>Decrypted File</h4>
        <input type="file" />
      </div>

      {/* Download Decrypted File Button */}
      <button>Download Decrypted File</button>
    </div>
  );
};

export default Decryptor;