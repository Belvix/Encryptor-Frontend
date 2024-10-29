import React, { useRef, useState } from 'react';

const CanvasComponent = ({ width, height }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = '#000000';
    context.lineJoin = 'round';
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // const saveCanvas = () => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');
  //   context.globalCompositeOperation = 'destination-over';
  //   context.fillStyle = 'white';
  //   context.fillRect(0, 0, canvas.width, canvas.height);
  //   const dataURL = canvas.toDataURL('image/jpg');
  //   const link = document.createElement('a');
  //   link.href = dataURL;
  //   link.download = 'canvas-drawing.jpg';
  //   link.click();
  // };

  const saveCanvas = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/jpg');
    const blob = await (await fetch(dataURL)).blob();
    const formData = new FormData();
    formData.append('file', blob, 'canvas-drawing.jpg');

    try {
      const response = await fetch("http://127.0.0.1:8000/upload-image/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.message); // Log upload success message
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: '1px solid #ddd', backgroundColor: '#ffffff', borderRadius: '8px', marginBottom: '25px' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button onClick={clearCanvas} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        Clear Canvas
      </button>
      <button onClick={saveCanvas} style={{ position: 'absolute', bottom: '10px', right: '170px' }}>
        Save to Server
      </button>
    </div>
  );
};

export default CanvasComponent;