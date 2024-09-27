import React, { useRef } from 'react';
import './styles.css';

const Encryptor = () => {
  const canvasRef = useRef(null);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="page-container">
      <h1>Encryptor</h1>
      <canvas ref={canvasRef} width={800} height={400} className="canvas"></canvas>
      <div id="uploadedFileArea">
        <input type="file" />
      </div>
      <button>Encrypt</button>
      <button onClick={handleClearCanvas}>Clear Canvas</button>
    </div>
  );
};

export default Encryptor;