import React, { useRef } from 'react';

const CanvasComponent = ({ width, height }) => {
  const canvasRef = useRef(null);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = '#000000';
    context.lineJoin = 'round';
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    const draw = (event) => {
      context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
      context.stroke();
    };

    canvas.addEventListener('mousemove', draw);

    const stopDrawing = () => {
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
    };

    canvas.addEventListener('mouseup', stopDrawing);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-drawing.png';
    link.click();
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: '1px solid #ddd', backgroundColor: '#e0e0e0', borderRadius: '8px', marginBottom: '25px' }}
        onMouseDown={startDrawing}
      />
      <button onClick={clearCanvas} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        Clear Canvas
      </button>
      <button onClick={saveCanvas} style={{ position: 'absolute', bottom: '10px', right: '110px' }}>
        Save
      </button>
    </div>
  );
};

export default CanvasComponent;