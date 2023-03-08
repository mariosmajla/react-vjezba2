const PrvaKompa = () => {
  const podnaslov = 'JSX';
  const formatTitle = title => title.toLowerCase();
  return (
    <>
      <h2>Podnaslov: {formatTitle(podnaslov)}</h2>
      <div>
        <h2>Prva komponenta</h2>
      </div>
    </>
  );
};

export default PrvaKompa;