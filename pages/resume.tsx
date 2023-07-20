import React from 'react';
import Iframe from 'react-iframe';

const resume = () => {
  return (
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <Iframe url='Resume.pdf' width='100%' height='100%' />
    </div>
  );
};

export default resume;
