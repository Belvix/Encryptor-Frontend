import React from 'react';
import { useHistory } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import FileSection from './FileSection';

const Decryptor = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <div className="page-container">
      <button onClick={goBack} style={{ position: 'absolute', top: '20px', left: '20px' }}>
        ← Go Back
      </button>
      <h1>Decryptor</h1>
      <CanvasComponent width={800} height={400} />
      <FileSection sectionTitle="Upload File to Decrypt" />
      <FileSection sectionTitle="Decrypted File" />
      <button id="decryptButton" style={{ marginTop: '20px' }}>Decrypt</button>
      <button id="downloadButton" style={{ marginTop: '20px' }}>Download Decrypted File</button>
    </div>
  );
};

export default Decryptor;