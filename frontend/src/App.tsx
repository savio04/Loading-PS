import React from 'react'
import Routes from './Routes'
import GlobalStyle from  './styles/GlobalStyles'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
