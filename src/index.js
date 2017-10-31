import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  console.log('App is running');
  return <div>wepack Example</div>;
};

ReactDOM.render(<App />, document.querySelector('.root'));
