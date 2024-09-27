import React from 'react';
import { useHistory } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import FileSection from './FileSection';

const Encryptor = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <div className="page-container">
      <button onClick={goBack} style={{ position: 'absolute', top: '20px', left: '20px' }}>
        ← Go Back
      </button>
      <h1>Encryptor</h1>
      <CanvasComponent width={800} height={400} />
      <FileSection sectionTitle="Upload File to Encrypt" />
      <FileSection sectionTitle="Encrypted File" />
      <button style={{ marginTop: '20px' }}>Download Encrypted File</button>
    </div>
  );
};

export default Encryptor;