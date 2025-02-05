import RandomNumberGenerator from "./components/RandomNumberGenerator";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1>True random Number Generator</h1>
      <RandomNumberGenerator />
    </div>
  );
}
