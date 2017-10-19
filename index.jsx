require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>WebPack Example</div>;
};

ReactDOM.render(<App />, document.querySelector('#myApp'));
