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
  if (!resp.ok) {
    console.log(resp);
    notFound();
  }

  const result: RatingResponseType = await resp.json();
  if (!result) notFound();

  return <RatingTable players={result.players} />;
}
