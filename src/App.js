import React from 'react';
import './App.css';
import { RemixClient } from './RemixClient'

function App() {
  const p = new RemixClient()
  const openModal = () => {
    p.onConnect()
  }
  const clearLocalStorage = () => {
    localStorage.clear()
    document.getElementById('accounts').innerHTML = ''
    document.getElementById('chain').innerHTML = ''
  }
  p.internalEvents.on('accountsChanged', (accounts) => {
    document.getElementById('accounts').innerHTML = JSON.stringify(accounts)
  })

  p.internalEvents.on('chainChanged', (chain) => {
    document.getElementById('chain').innerHTML = chain
  })
  return (
    <div className="App">
      <div className="btn-group mt-5" role="group"> 
        <button type="button" onClick={openModal} className="btn btn-primary">Connect</button>
        <button type="button" onClick={clearLocalStorage} className="btn btn-primary">Clear Local Sessions</button>
      </div>
      <div><label><b>Accounts: </b></label><label className="ml-1" id="accounts"> - </label></div>
      <div><label><b>ChainId: </b></label><label className="ml-1" id="chain"> - </label></div>
    </div>
  );
}

export default App;
