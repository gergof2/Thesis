import UserContext from './auth/AccountContext';

import React from 'react';

import {StyledContainer} from './components/Styles/Styles';

import Views from './pages/Views';

function App() {
  return (
    <UserContext>
      <StyledContainer>
        <Views/>
      </StyledContainer>    
    </UserContext>
  );
}

export default App;
