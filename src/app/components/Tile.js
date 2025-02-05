import Link from "next/link";

export default function Tile({ label, href }) {
  return (
    <div>
      <Link href={href}>
        <div>{label}</div>
      </Link>
    </div>
  );
}
