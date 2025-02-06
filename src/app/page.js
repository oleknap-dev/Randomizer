import Tile from "./components/Tile";

export default function Page() {
  return (
    <div>
      <header>
        <h1 className="text-7xl font-bold ml-12 mt-8 mb-24">Randomizer</h1>
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
          image="/images/coin-flip.jpg"
        />
        <Tile
          label="Roll dice"
          href="/roll-dice"
          image="/images/roll-dice.jpg"
        />
      </div>
    </div>
  );
}
