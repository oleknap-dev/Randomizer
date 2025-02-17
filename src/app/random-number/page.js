import RandomNumberGenerator from "./RandomNumberGenerator";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <header>
        <h1 className="text-6xl font-bold mt-8">
          True Random Number Generator
        </h1>
      </header>
      <RandomNumberGenerator />
    </div>
  );
}
