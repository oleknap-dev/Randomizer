import RandomNumberGenerator from "./RandomNumberGenerator";

export default function Page() {
  return (
    <div>
      <header>
        <h1 className="text-7xl font-bold ml-12 mt-8 mb-24">Random Number</h1>
      </header>
      <RandomNumberGenerator />
    </div>
  );
}
