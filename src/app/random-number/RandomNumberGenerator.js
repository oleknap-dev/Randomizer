"use client";

import { useState } from "react";

export default function RandomNumberGenerator() {
  const [number, setNumber] = useState();
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);

  async function randomize() {
    let newmax = max;
    if (min >= max) {
      setMax(min + 1);
      newmax = min + 1;
    }

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
          min: min,
          max: newmax,
          base: 10,
        },
        id: 6105,
      }),
    });

    const data = await response.json();
    setNumber(data.result.random.data);
  }

  return (
    <div className="flex flex-col items-center">
      <label>
        Max:
        <input
          value={max}
          type="number"
          onChange={(e) => setMax(Number(e.target.value))}
          className="border border-black ml-8 w-32"
        />
      </label>
      <label>
        Min:
        <input
          value={min}
          type="number"
          onChange={(e) => setMin(Number(e.target.value))}
          className="border border-black ml-8 w-32"
        />
      </label>
      <button onClick={randomize}>Generate</button>
      <h1>{number}</h1>
    </div>
  );
}
