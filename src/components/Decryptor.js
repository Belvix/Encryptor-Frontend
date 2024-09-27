import React, { useRef } from 'react';
import './styles.css';

const Decryptor = () => {
  const canvasRef = useRef(null);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="page-container">
      <h1>Decryptor</h1>
      <canvas ref={canvasRef} width={800} height={400} className="canvas"></canvas>
      <div id="uploadedFileArea">
        <input type="file" />
      </div>
      <button>Decrypt</button>
      <button onClick={handleClearCanvas}>Clear Canvas</button>
      <button>Download Decrypted File</button>
    </div>
  );
};

export default Decryptor;