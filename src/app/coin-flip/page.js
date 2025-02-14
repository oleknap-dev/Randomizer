import CoinFlip from "./CoinFlip";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <header>
        <h1 className="text-7xl font-bold mt-8">Coin Flip</h1>
      </header>
      <CoinFlip />
    </div>
  );
}
