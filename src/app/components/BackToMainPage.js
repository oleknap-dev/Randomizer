import Link from "next/link";

export default function BackToMainPage() {
  return (
    <div className="absolute top-11 left-2 w-12">
      <Link href="/">
        <img
          src="/images/arrow_back.webp"
          className="transition ease-in-out duration-200 transform hover:scale-110"
        ></img>
      </Link>
    </div>
  );
}
