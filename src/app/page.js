import Tile from "./components/Tile";

export default function Page() {
  return (
    <div className="flex justify-center items-center mr-6">
      <Tile
        label="Random Number"
        href="/random-number"
        image="/images/random-numbers.jpg"
      />
      <Tile label="Coin flip" href="/coin-flip" />
    </div>
  );
}
