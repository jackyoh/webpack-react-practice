import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  console.log('Your app is running');
  return (
    <div>
      <h1>React, webpack example</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
