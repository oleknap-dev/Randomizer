import Tile from "./components/Tile";

export default function Page() {
  return (
    <div className="flex justify-center items-center gap-2">
      <Tile
        label="Random Number"
        href="/random-number"
        image="/images/random-numbers.jpg"
      />
      <Tile label="Coin flip" href="/coin-flip" image="/images/coin-flip.jpg" />
    </div>
  );
}
