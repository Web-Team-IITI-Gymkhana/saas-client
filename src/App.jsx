import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/router/App';
import './fontawesome';
import { ApolloProvider } from '@apollo/client';
import client from '@/apollo/index';
import AuthContext from './context/context-config';

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const setCompany = (company) => setSelectedCompany(company);

  return (
    <>
      <Suspense fallback={<></>}>
        <ApolloProvider client={client}>
          <Router>
            <AuthContext.Provider
              value={{
                selectedCompany: selectedCompany,
                setSelectedCompany: setCompany
              }}
            >
              <AppRoutes />
            </AuthContext.Provider>
          </Router>
        </ApolloProvider>
      </Suspense>
    </>
  );
}

export default App;
