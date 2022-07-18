import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer title="Jewelry tells a great story" />
    </div>
  );
}

export default App;
