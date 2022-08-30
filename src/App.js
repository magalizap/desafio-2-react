import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css'
function App() {
  return (
    <>
      <NavBar cart={3}/>
      <ItemListContainer saludo="Welcome!"/>
    </>
  )
}

export default App;
