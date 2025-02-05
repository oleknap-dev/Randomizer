import Tile from "./components/Tile";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Tile
        label="Random Number"
        href="/random-number"
        image="/images/random-numbers.jpg"
      />
    </div>
  );
}
