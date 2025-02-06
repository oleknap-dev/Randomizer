import Link from "next/link";

export default function Tile({ label, href, image }) {
  return (
    <div className="flex relative items-center justify-center  w-80 h-48 rounded-md border border-black border-opacity-15 overflow-hidden group">
      <div
        className="w-80 h-48 bg-center bg-cover transition duration-300 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <Link
        className="w-40 h-14 absolute font-bold bg-white flex items-center rounded-md justify-center 
        bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-60 
        border border-black border-opacity-35 hover:border-opacity-45 active:border-opacity-45 transition duration-200 ease-in-out hover:scale-[102%] "
        href={href}
      >
        {label}
      </Link>
    </div>
  );
}
