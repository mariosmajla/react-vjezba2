import './App.css';
// import Prva from './components/PrvaKompa';
// import { default as Cetvrta, DrugaKompa as Druga, TrecaKompa} from './components/DrugaKompa';
import { PrvaKompa as Prva, DrugaKompa as Druga, TrecaKompa, CetvrtaKompa as Cetvrta, NekaKompa } from './components';
function App() {
  return (
    <div className="App">
      <h1>Algebra</h1>
      <Prva />
      <Druga />
      <TrecaKompa />
      <Cetvrta />
      <NekaKompa />
    </div>
  );
}

export default App;
