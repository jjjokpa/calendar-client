import React, { useState } from 'react'
import DateForm from './components/DateForm';
import Header from './components/Header';
import './App.css'

function App() {
  const [token, setToken] = useState('')

  const setTokenHandler = (new_token) => {
    setToken(new_token)
  }

  return (
    <div className='container'>
      <header>
        <Header onLogin={setTokenHandler} />
      </header>
      <section>
        <DateForm token={token} />
      </section>
    </div>
  );
}

export default App;
