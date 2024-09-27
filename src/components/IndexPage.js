import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const IndexPage = () => {
  return (
    <div className="page-container">
      <h1>Welcome</h1>
      <div className="options-container">
        <Link to="/encryptor"> {/* Corrected the path */}
          <button>Encrypt</button>
        </Link>
        <Link to="/decryptor"> {/* Corrected the path */}
          <button>Decrypt</button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;