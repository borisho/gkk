import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="inline-flex items-stretch gap-2">
        <Link href="/" className="inline-flex items-center px-2">
          <Image
            className="m-1"
            src="/logo512.png"
            loading="eager"
            width={40}
            height={40}
            alt="logo"
          />
          <span className="m-1 text-xl">GKK</span>
        </Link>
        <Link href="/posts" className="inline-flex items-center px-2">
          <span className="m-1 text-l">Posts</span>
        </Link>
        <Link
          href="https://gkk.sago.sk/"
          className="inline-flex items-center px-2"
        >
          <span className="m-1 text-l">gkk.sago.sk</span>
        </Link>
      </nav>
    </header>
  );
}
