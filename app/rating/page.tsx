import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { RatingResponseType } from "@appTypes/rating";
import RatingTable from "@ratingComponents/RatingTable";

export default async function RatingPage() {
  "use cache";
  cacheLife("minutes");

  const resp = await fetch(
    process.env.NEXT_PUBLIC_EGD_DB +
      "GetPlayerDataByData.php?lastname=*&country=sk",
  );
  const result: RatingResponseType = await resp.json();
  if (!resp.ok || !result) notFound();

  return <RatingTable players={result.players} />;
}
