import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/router/App';
import './fontawesome';
import { ApolloProvider } from '@apollo/client';
import client from '@/apollo/index';
function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <ApolloProvider client={client}>
          <Router>
            <AppRoutes />
          </Router>
        </ApolloProvider>
      </Suspense>
    </>
  );
}

export default App;
