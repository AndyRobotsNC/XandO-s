import "./App.css";
import Heading from "./components/Heading";
import SymbolSelector from "./components/SymbolSelector";
import SymbolDisplay from "./components/SymbolDisplay";
import GameBoard from "./components/GameBoard";

const { useState } = require("react");

function App() {
  const [symbol, setSymbol] = useState("");
  const [buttonDisable, setDisable] = useState(false);

  return (
    <div className="App">
      <Heading className="heading" />
      <SymbolSelector
        setSymbol={setSymbol}
        buttonDisable={buttonDisable}
        setDisable={setDisable}
        className="symbolSelector"
      />
      <SymbolDisplay symbol={symbol} className="symbolDisplay" />
      <GameBoard symbol={symbol} setSymbol={setSymbol} />
    </div>
  );
}

export default App;
