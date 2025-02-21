"use client";

import { useState } from "react";

export default function RollDice() {
  const [diceCount, setDiceCount] = useState(1);
  const [result, setResult] = useState(Array(diceCount).fill(1));
  const [isRolling, setIsRolling] = useState(false);

  const diceImages = [
    "/images/dice-dots/dice-1.webp",
    "/images/dice-dots/dice-2.webp",
    "/images/dice-dots/dice-3.webp",
    "/images/dice-dots/dice-4.webp",
    "/images/dice-dots/dice-5.webp",
    "/images/dice-dots/dice-6.webp",
  ];

  const numberOfDice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function rollDice() {
    if (isRolling) return;

    setIsRolling(true);

    const rollingInterval = setInterval(() => {
      setResult(
        Array.from({ length: diceCount }, () =>
          Math.floor(Math.random() * 6 + 1)
        )
      );
    }, 200);

    setTimeout(async () => {
      clearInterval(rollingInterval);
      try {
        const response = await fetch(
          "https://api.random.org/json-rpc/4/invoke",
          {
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
          }
        );

        const data = await response.json();
        setResult(data.result.random.data);
        setIsRolling(false);
      } catch (error) {
        console.log("Error: ", error);
        setResult("Error");
      }
    }, 1200);
  }

  return (
    <div className="flex flex-col text-2xl gap-10">
      <div className="flex flex-row justify-center gap-1">
        {result.map((num, id) => (
          <img key={id} className="w-20 rounded-xl" src={diceImages[num - 1]} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <label>
          Roll
          <select
            className="w-12 text-xl mx-2 cursor-pointer border-2 border-black rounded-md 
              hover:scale-105 
              ease-in-out transition duration-200"
            onChange={(e) => {
              const count = Number(e.target.value);
              setDiceCount(count);
              setResult(Array(count).fill(1));
            }}
          >
            {numberOfDice.map((number, id) => (
              <option key={id} value={number}>
                {number}
              </option>
            ))}
          </select>
          virtual dice
        </label>
        <button
          className="w-36 h-16 text-black text-opacity-90 bg-white bg-opacity-90 rounded-lg border-2 border-black border-opacity-90
            hover:text-opacity-100 hover:bg-opacity-100 hover:scale-105 hover:border-opacity-100
            active:bg-opacity-75 active:scale-100 active:text-opacity-75 active:border-opacity-75
            ease-in-out transition duration-200"
          onClick={rollDice}
        >
          Roll dice
        </button>
      </div>
    </div>
  );
}
