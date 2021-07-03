import React, { useState } from 'react'
import DateForm from './components/DateForm';
import LoginForm from './components/LoginForm';

function App() {
  const [token, setToken] = useState('')

  const setTokenHandler = (new_token) => {
    console.log('set token')
    setToken(new_token)
  }

  return (
    <div>
      <LoginForm onLogin={setTokenHandler} />
      <DateForm token={token} />
    </div>
  );
}

export default App;
