"use client";

import { useState } from "react";

export default function CoinFlip() {
  const [result, setResult] = useState();

  async function flipCoin() {
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
            n: 1,
            min: 1,
            max: 2,
            base: 10,
          },
          id: 6105,
        }),
      });

      const data = await response.json();
      if (data.result.random.data[0] === 1) setResult("Heads");
      if (data.result.random.data[0] === 2) setResult("Tails");
    } catch (error) {
      console.log("Error: ", error);
      setResult("Error");
    }
  }

  return (
    <div>
      <div>
        <button onClick={flipCoin}>Flip a coin</button>
      </div>
      {result !== undefined && <h1>{result}</h1>}
    </div>
  );
}
