"use client";

import { useState } from "react";

export default function RandomNumberGenerator() {
  const [result, setResult] = useState();
  const [isGenerating, setIsGenerating] = useState();
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);

  async function generateRandomNumber() {
    let newmax = max;
    if (min >= max) {
      setMax(min + 1);
      newmax = min + 1;
    }

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
            min: min,
            max: newmax,
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
    <div className="flex flex-col items-start gap-6">
      <div className="text-2xl flex items-center">
        <span className="w-12 pointer-events-none">Max:</span>
        <input
          value={max}
          type="number"
          onChange={(e) =>
            setMax(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="border border-black ml-2 w-32 h-8 text-2xl rounded-md hover:cursor-pointer hover:scale-105 ease-in-out transition duration-200"
        />
      </div>

      <div className="text-2xl flex items-center">
        <span className="w-12">Min:</span>
        <input
          value={min}
          type="number"
          onChange={(e) =>
            setMin(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="border border-black ml-2 w-32 h-8 text-2xl rounded-md hover:cursor-pointer hover:scale-105 ease-in-out transition duration-200"
        />
      </div>

      <button
        className="w-32 h-12  text-lg font-semibold text-black text-opacity-80 bg-white bg-opacity-80 rounded-lg border-2 border-black border-opacity-80
            hover:text-opacity-100 hover:bg-opacity-100 hover:scale-105 hover:border-opacity-100
            active:bg-opacity-75 active:scale-100 active:text-opacity-75 active:border-opacity-75
            ease-in-out transition duration-200"
        onClick={generateRandomNumber}
      >
        Generate
      </button>
      <div className="flex gap-2 items-start">
        <p className="text-2xl ">Result:</p>
        <p className="text-2xl font-bold">{result}</p>
      </div>
    </div>
  );
}
