const GameBoard = ({ symbol, setSymbol }) => {
  const winningCombosX = [
    "123",
    "159",
    "147",
    "258",
    "357",
    "369",
    "456",
    "789",
  ];
  const winningCombosO = [
    "123",
    "159",
    "147",
    "258",
    "357",
    "369",
    "456",
    "789",
  ];

  const addSymbol = (event) => {
    const gridItemClassList = event.target.classList.value.split(" ");
    const gridNum = event.target.innerHTML;
    console.log(winningCombosO);

    if (
      gridItemClassList.includes("cross") ||
      gridItemClassList.includes("nought")
    ) {
    } else if (symbol === "X") {
      event.target.classList.add("cross");
      setSymbol("O");

      winningCombosO.forEach((combo) => {
        console.log(combo);

        if (combo.includes(gridNum)) {
          let comboPosition = winningCombosO.indexOf(combo);
          winningCombosO.splice(comboPosition, 1);
        }
        console.log(winningCombosO);
      });
    } else if (symbol === "O") {
      event.target.classList.add("nought");
      setSymbol("X");
    }
  };

  return (
    <div class="grid-container">
      <div onMouseDown={addSymbol} class="grid-item">
        1
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        2
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        3
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        4
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        5
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        6
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        7
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        8
      </div>
      <div onMouseDown={addSymbol} class="grid-item">
        9
      </div>
    </div>
  );
};

export default GameBoard;
