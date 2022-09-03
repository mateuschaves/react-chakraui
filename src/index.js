import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clients from './pages/Clients';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Clients />
    </ChakraProvider>
  </React.StrictMode>
);

