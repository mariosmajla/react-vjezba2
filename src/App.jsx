import './App.css';
import PrvaKompa from './components/PrvaKompa';
import DrugaKompa from './components/DrugaKompa';
import * as OstaleKompe from './components/OstaleKompe';

function App() {
  return (
    <div className="App">
      <h1>Algebra</h1>
      <PrvaKompa />
      <DrugaKompa />
      <OstaleKompe.TrecaKompa />
      <OstaleKompe.CetvrtaKompa />
    </div>
  );
}

export default App;
