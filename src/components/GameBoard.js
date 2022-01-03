const GameBoard = ({ symbol, setSymbol }) => {
  const addSymbol = (event) => {
    const gridItemClassList = event.target.classList.value.split(" ");
    console.log(gridItemClassList);
    if (
      gridItemClassList.includes("cross") ||
      gridItemClassList.includes("nought")
    ) {
    } else if (symbol === "X") {
      event.target.classList.add("cross");
      setSymbol("O");
    } else if (symbol === "O") {
      event.target.classList.add("nought");
      setSymbol("X");
    }
  };

  return (
    <div class="grid-container">
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
      <div onMouseDown={addSymbol} class="grid-item"></div>
    </div>
  );
};

export default GameBoard;
