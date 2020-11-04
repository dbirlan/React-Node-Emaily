import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {(props) => <h1 style={props}>Emaily !</h1>}
      </Spring>
      <p>Collect feedback from your users</p>
    </div>
    
  );
};

export default Landing;
