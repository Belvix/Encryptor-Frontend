import React, { useState } from 'react';

const FileSection = ({ sectionTitle }) => {
  const [fileName, setFileName] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : null);
  };

  return (
    <div id="uploadedFileArea">
      <h4>{sectionTitle}</h4>
      <input type="file" onChange={handleFileUpload} style={{ display: 'block', marginBottom: '10px' }} />
      {fileName && <p>Uploaded: {fileName}</p>}
    </div>
  );
};

export default FileSection;