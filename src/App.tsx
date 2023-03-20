import React, { useCallback, useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  const handleNumber = useCallback(
    (valor: number) => {
      if (valor > 100 || valor < 0) {
        setNumber(number);
      } else {
        setNumber(valor);
      }
    },
    [setNumber, number]
  );

  return (
    <>
      <div id="action">
        <p>Numero</p>
        <input
          placeholder="Insira o numero..."
          type="number"
          value={number}
          onChange={(e) => handleNumber(Number(e.target.value))}
        />
      </div>
      <ul className="App">
        {Array(120)
          .fill(0)
          .map(
            (_, i) =>
              number > 0 &&
              number < 101 && (
                <li key={i} data-testid="number-calc">
                  {number} <strong>x</strong> {i} <strong>=</strong>{" "}
                  {number * i}
                </li>
              )
          )}
      </ul>
    </>
  );
}

export default App;
