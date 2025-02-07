"use client";

import { useState } from "react";

export default function RollDice() {
  const [result, setResult] = useState();
  const [diceCount, setDiceCount] = useState(1);

  async function rollDice() {
    try {
      const response = await fetch("https://api.random.org/json-rpc/4/invoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "generateIntegers",
          params: {
            apiKey: "845658bd-ca8c-4406-842f-a364b43c5f6a",
            n: diceCount,
            min: 1,
            max: 6,
            base: 10,
          },
          id: 6105,
        }),
      });

      const data = await response.json();
      setResult(data.result.random.data);
    } catch (error) {
      console.log("Error: ", error);
      setResult("Error");
    }
  }

  return (
    <div>
      <button onClick={rollDice}>Roll a dice</button>
      {result !== undefined && <h1>{result}</h1>}
    </div>
  );
}
