import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App = () => (
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
      <GlobalStyle />
    </AppProvider>
);

export default App;
