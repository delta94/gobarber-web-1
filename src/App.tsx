import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/auth';

import GlobalStyle from './styles/global';

const App = () => (
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
      <GlobalStyle />
    </AuthProvider>
);

export default App;
