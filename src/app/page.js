import Tile from "./components/Tile";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start">
        <header className="text-7xl font-bold mt-8 mb-24">
          <h1>Randomizer</h1>
        </header>
        <div className="flex justify-center items-center gap-2">
          <Tile
            label="Random Number"
            href="/random-number"
            image="/images/random-numbers.jpg"
          />
          <Tile
            label="Coin flip"
            href="/coin-flip"
            image="/images/coin-flip.PNG"
          />
          <Tile
            label="Roll dice"
            href="/roll-dice"
            image="/images/roll-dice.jpg"
          />
        </div>
      </div>
    </div>
  );
}
