import RollDice from "./RollDice";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-24">
      <header>
        <h1 className="text-7xl font-bold mt-8">Roll The Dice</h1>
      </header>
      <RollDice />
    </div>
  );
}
