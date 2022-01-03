const SymbolSelector = ({ setSymbol, buttonDisable, setDisable }) => {
  const pressButton = (event) => {
    const content = event.target.innerHTML;
    setSymbol(content);
    setDisable(true);
  };

  return (
    <div>
      <h2>Choose your starting symbol...</h2>
      <button disabled={buttonDisable} onClick={pressButton}>
        X
      </button>
      <br></br>
      <button disabled={buttonDisable} onClick={pressButton}>
        O
      </button>
    </div>
  );
};
export default SymbolSelector;
