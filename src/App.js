import './App.css';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function App() {

  const [inputValueOne, setInputValueOne] = useState('')
  const [inputValueTwo, setInputValueTwo] = useState('')
  const [ghData, setGhData] = useState({})
  const [ghDataSecondUser, setGhDataSecondUser] = useState({})
  const [handleButtonOne, setHandleButtonOne] = useState(true)
  const [handleButtonTwo, setHandleButtontwo] = useState(true)

  const handleinputValueOne = (event) => {
    setInputValueOne(event.target.value)
  }

  const handleinputValueTwo = (event) => {
    setInputValueTwo(event.target.value)
  }

  const handleSubmitButtonOne = (event) => {
    if (inputValueOne) {
      setHandleButtonOne(!handleButtonOne)
      const url = `https://api.github.com/users/${inputValueOne}`
      fetch(url).then(res => res.json()).then(data => {
        setGhData(data)
      })
    }
    setInputValueOne('')
  }

  const handleSubmitButtonTwo = (event) => {
    if (inputValueTwo) {
      setHandleButtontwo(!handleButtonTwo)
      const url = `https://api.github.com/users/${inputValueTwo}`
      fetch(url).then(res => res.json()).then(data => {
        setGhDataSecondUser(data)
      })
    }
    setInputValueTwo('')
  }

  return (
    <div className="App">
      <h1>Instructions</h1>
      <div className='heroContainer' style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Enter Two GitHub Users</h3>
          <img src={require('./assets/enter-two-users.jpg')} />
        </div>
        <div>
          <h3>Battle</h3>
          <img src={require('./assets/battle.jpg')} />
        </div>
        <div>
          <h3>See the Winner</h3>
          <img src={require('./assets/see-the-winner.jpg')} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div >
          <TextField onChange={handleinputValueOne} value={inputValueOne}
            id='outlined-basic' label='Enter GitHub User' variant='outlined' />
          <Button onClick={handleSubmitButtonOne}
            disabled={!inputValueOne}
            style={{ height: '55px' }} variant='outlined'>SUBMIT</Button>
        </div>
        <div>
          <TextField onChange={handleinputValueTwo} value={inputValueTwo}
            id='outlined-basic' label='Enter GitHub User' variant='outlined' />
          <Button onClick={handleSubmitButtonTwo}
            disabled={!inputValueTwo}
            style={{ height: '55px' }} variant='outlined'>SUBMIT</Button>
        </div>
      </div>

    </div>
  );
}

export default App;
