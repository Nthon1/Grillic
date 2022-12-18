import React from 'react'
import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom';

import App from "/Users/nityathondapu/Test for Login Page/React-Firebase-Auth/src/components/App.js";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />, document.getElementById('root'));

// // const rootElement = 
// // document.getElementById('root');
// // const root = 
// // createRoot(rootElement);

// root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>,
//   );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
