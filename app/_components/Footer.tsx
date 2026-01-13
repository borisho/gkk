import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 my-10">
      <h1 className="text-gray-100 text-2xl">KONTAKT</h1>
      <div className="flex flex-col items-center justify-center">
        <span>Slavomír Králik</span>
        <span>Bruselská 13, 040 13, Košice</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span>
          {" "}
          Tel. č.:{" "}
          <Link
            className="text-red-200 transition ease duration-500 hover:text-red-600"
            href="tel:0917626444"
          >
            0917 626 444
          </Link>
        </span>
        <span>
          {" "}
          Mobil. č.:{" "}
          <Link
            className="text-red-200 transition ease duration-500 hover:text-red-600"
            href="tel:0903314694"
          >
            0903 314 694
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-gray-100 text-xl">Email:</h2>
        <Link
          className="text-red-200 transition ease duration-500 hover:text-red-600"
          href="mailto:kralikslavomir@gmail.com"
        >
          kralikslavomir@gmail.com
        </Link>
        <Link
          className="text-red-200 transition ease duration-500 hover:text-red-600"
          href="mailto:rabbits@seznam.cz"
        >
          rabbits@seznam.cz
        </Link>
      </div>
    </footer>
  );
}
