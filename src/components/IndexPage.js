import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const IndexPage = () => {
  return (
    <div className="page-container index-page-container">
      <h1>Welcome</h1>
      <div className="options-container">
        <Link to="/encryptor"> 
          <button>Encrypt</button>
        </Link>
        <Link to="/decryptor"> 
          <button>Decrypt</button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;