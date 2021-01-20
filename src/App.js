import './App.css';
import ipfsClient from 'ipfs-http-client';

// test basico para el uso de la libreria

const record = 'QmYY8nfTRYU3tm3wptZfFxfnSCs2gTHz41aHRuPjQDDvv4'; // tiene que ser el CID de una imagen (o cambiar el tag img)
const ipfs = ipfsClient('http://localhost:5001');

async function test() {

  const output = await ipfs.add('Holitas');
  
  console.log(output);
}

function App() {
  
  test();

  return (
    <div className="App">
      <header className="App-header">
        <img alt="ejemplo" src={`http://127.0.0.1:8080/ipfs/${record}`} />
      </header>
    </div>
  );
}

export default App;
