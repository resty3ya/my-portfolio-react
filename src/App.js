//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import links from './links';

function App() {
  return (
    <div className="App">
      <h1>LOGO</h1>
        {links.map(links => <Header 
          key={links.id}
          name={links.name}
        />)}
      <header className="App-header">
       

      </header>
    </div>
  );
}

export default App;
