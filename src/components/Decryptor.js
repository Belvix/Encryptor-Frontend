import React, { useRef , useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './CanvasComponent'
import CanvasComponent from './CanvasComponent';

const Decryptor = () => {
  const canvasRef = useRef(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadSuccess(true);
      setTimeout(() => {
        setFileName('No file chosen');
        setUploadSuccess(false);
        e.target.value = '';
      }, 200000);
    }
  };
  return (
    <div className="page-container">
      <Link to="/" className="go-back-button">Go Back</Link>

      <h1>Decryptor</h1>

      <div className="canvas-container">
        <CanvasComponent ref={canvasRef} width={800} height={400} className="canvas" />
      </div>

      <div id="uploadedFileArea" className={`upload-area ${uploadSuccess ? 'upload-success' : ''}`}>
        <h4>Upload File</h4>
        {!uploadSuccess && (
          <>
            <label htmlFor="file-upload" className="file-upload-label">Choose a file</label>
            <input type="file" id="file-upload" onChange={handleFileChange} />
          </>
        )}
        {uploadSuccess && (
          <div className="uploaded-file-info">
            <p className="file-name">{fileName}</p>
            <p className="success-message">File Uploaded!</p>
          </div>
        )}
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