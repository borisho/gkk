import Link from "next/link";

export default function Pagination({
  path,
  currentPage,
  totalPages,
}: {
  path: string;
  currentPage: number;
  totalPages: number;
}) {
  function renderPageLink(page: number, index: number) {
    if (index === currentPage) {
      return ".";
    } else {
      return (
        <Link href={`${path}?page=${page}`} key={index}>
          {page}
        </Link>
      );
    }
  }

  return (
    <nav className="flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, i) =>
        renderPageLink(page, i),
      )}
    </nav>
  );
}
