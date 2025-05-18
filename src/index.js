import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './app/store';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <ChakraProvider>
    <App />
    </ChakraProvider>
    </Router>
    </Provider>
  </React.StrictMode>
);


