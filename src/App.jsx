import './App.css';
import PrvaKompa from './components/PrvaKompa';
import DrugaKompa from './components/DrugaKompa';
import * as OstaleKompe from './components/OstaleKompe';

function App() {
  const jasnoSvima = 23;
  const podnaslov = jasnoSvima 
    ? 
    <h2>Svima je jasno, bas super</h2> 
    : 
    <h2>Svi samo klimaju glavom, nikome nije jasno</h2>;

  const pozdravniFooter = jasnoSvima && <h2>Pozdrav do Cetvrtka</h2>;
  return (
    <div className="App">
      <h1>Algebra</h1>
      {podnaslov}
      <PrvaKompa />
      <DrugaKompa />
      <OstaleKompe.TrecaKompa />
      <OstaleKompe.CetvrtaKompa />
      {pozdravniFooter}
    </div>
  );
}

export default App;
