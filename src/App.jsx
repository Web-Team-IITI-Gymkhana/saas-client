import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '@/router/App'
import './fontawesome'

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Router>
          <AppRoutes />
        </Router>
      </Suspense>
    </>
  )
}

export default App;
