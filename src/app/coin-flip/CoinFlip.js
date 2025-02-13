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
      <div className="flex flex-col justify-center items-center">
        <img className="rounded-full mb-4" src="/images/coin/heads.png"></img>
        {result && <p className="text-xl font-semibold mb-6">{result}</p>}
        <button
          className="w-40 h-20 text-xl font-semibold text-black text-opacity-80 bg-white bg-opacity-80 rounded-lg border-2 border-black border-opacity-80
            hover:text-opacity-100 hover:bg-opacity-100 hover:scale-105 hover:border-opacity-100
            active:bg-opacity-75 active:scale-100 active:text-opacity-75 active:border-opacity-75
            ease-in-out transition duration-200"
          onClick={flipCoin}
        >
          Flip Coin
        </button>
      </div>
    </div>
  );
}
