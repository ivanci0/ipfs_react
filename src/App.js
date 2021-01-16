import './App.css';
import ipfsClient from 'ipfs-http-client';
// import all from 'it-all';

function App() {

  const ipfs = ipfsClient('http://localhost:5001'); //'http://localhost:5001' el default

  async function coso() {
    //const cid = 'QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn'
  
    const output = await ipfs.add('Holitas')
    
    console.log(output)
  }

  coso();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <img src={`https://127.0.0.1/ipfs/QmbkxD2C3HXfCjmMocaTgPWMZbk4kg3K6sT7zttiedUW4X`} />
        
      </header>
    </div>
  );
}

export default App;

// carpet QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn
// caca2 QmcC3AwnPVxy14qSj7xjaMCYtR2x8wc8WP89mbWYk9WG7z
// ogame QmbkxD2C3HXfCjmMocaTgPWMZbk4kg3K6sT7zttiedUW4X
