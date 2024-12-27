import React from 'react';
import '../assets/styles/FloatingSpecks.css';

function FloatingSpecks() {
  return (
    <div className="background">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="speck"></div>
      ))}
    </div>
  );
};

export default FloatingSpecks;