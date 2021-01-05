import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/**<App /> - componenet: this is the function which returns HTML 
     *  combination of javaScript and HTML is JSX (only in React)
    */}

    <App /> {/** There has to be only 1 <App /> in index.js */}
  </React.StrictMode>,
  document.getElementById('root')
);

