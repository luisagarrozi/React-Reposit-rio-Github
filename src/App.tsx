import './App.css';
import { RepositoryList } from './components/RepositoryList';

export function App() {
  return (
    // Fragment é uma chave sem nada dentro <>, não produz nenhuma tag html
    <>
  <RepositoryList />
  </>
  );
}

export default App;
