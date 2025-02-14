"use client";

import { useState } from "react";

export default function CoinFlip() {
  const [result, setResult] = useState("/images/coin/heads.png");
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipped, setFlipped] = useState(false);

  async function flipCoin() {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipped(true);

    setTimeout(async () => {
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
                n: 1,
                min: 1,
                max: 2,
                base: 10,
              },
              id: 6105,
            }),
          }
        );

        const data = await response.json();
        if (data.result.random.data[0] === 1)
          setResult("/images/coin/heads.png");
        if (data.result.random.data[0] === 2)
          setResult("/images/coin/tails.png");
        setIsFlipping(false);
      } catch (error) {
        console.log("Error: ", error);
        setResult("Error");
      }
    }, 3000);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {isFlipping && (
          <img
            className="rounded-full mb-4 animate-flipCoin"
            src="/images/coin/coin.png"
          />
        )}
        {!isFlipping && (
          <img
            className="rounded-full mb-4"
            src={result ? result : "/images/coin/heads.png"}
          />
        )}
        <div className="flex flex-row mb-8 gap-2">
          <div className="flex text-xl font-semibold text-center min-h-[30px]">
            {flipped &&
              !isFlipping &&
              (result === "/images/coin/heads.png" ? "Heads" : "Tails")}
          </div>
        </div>
        <button
          className=" w-40 h-20 text-xl font-semibold text-black text-opacity-80 bg-white bg-opacity-80 rounded-lg border-2 border-black border-opacity-80
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
