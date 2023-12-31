import './App.css';
import {ethers} from 'ethers'

import {abiContract} from './AbiContract'

import {useState} from 'react'

function App() {


  const [value, setValue] = useState()
  const [connectedAddres, setConnectedAddress] = useState()
  const [retrievedValue, setRetrieveValue] = useState()

  const {ethereum} = window;
  const provider = new ethers.providers.Web3Provider(ethereum)
    
  const addressContract = '0x5dd0fF0E6D78cc6B85Fe63365f379B427CEc2A8F'
  const contractInstance = new ethers.Contract(addressContract, abiContract, provider.getSigner())

  const connectwalletHandler = async () => {

    await provider.send("eth_requestAccounts", [])
    const address = await provider.getSigner().getAddress();
    setConnectedAddress(address);
    
  }

  const store = async ()=>{
    await contractInstance.store(value)
  }

  const retrieve = async ()=> {
      await contractInstance.contribuir()
  }

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <button onClick={connectwalletHandler}>Connect</button>
          <p>{connectedAddres}</p>
        </div>

        <div>
          <button onClick={store}>store</button>
          <input value={value} onChange={(e)=> {setValue(e.target.value)}}></input>
        </div>

        <div>
          <button onClick={retrieve}>retrieve</button>
          <p>{retrievedValue}</p>
        </div>
     
      </header>
    </div>
  );
}

export default App;