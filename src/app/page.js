"use client";

import { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState();

  async function randomize() {
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
          max: 10,
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
      <button onClick={randomize}>random</button>
      <h1>{number}</h1>
    </div>
  );
}
