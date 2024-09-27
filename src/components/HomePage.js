import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  return (
    <div className="page-container">
      <h1>Choose an Option</h1>
      <div className="options-container">
        <button onClick={() => history.push('/encryptor')}>Encrypt</button>
        <button onClick={() => history.push('/decryptor')}>Decrypt</button>
      </div>
    </div>
  );
};

export default HomePage;