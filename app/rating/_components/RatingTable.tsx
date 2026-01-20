"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { RatingResponseType, PlayerType } from "@appTypes/rating";
import TableHead from "@ratingComponents/TableHead";
import TableRow from "@ratingComponents/TableRow";

export default function RatingTable() {
  const [active, setActive] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [players, setPlayers] = useState<PlayerType[] | null | undefined>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_EGD_DB +
            "GetPlayerDataByData.php?lastname=*&country=sk",
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const json: RatingResponseType = await response.json();
        setPlayers(json.players);
      } catch (err) {
        setError(err as Error);
      }
    }

    fetchData();
  }, []);

  function generateRow(players: PlayerType[], active: boolean) {
    return players
      .filter((player: PlayerType) =>
        active ? player.EGF_Placement !== "0" : true,
      )
      .sort(
        (a: PlayerType, b: PlayerType) =>
          +b.Gor - +a.Gor || +a.EGF_Placement - +b.EGF_Placement,
      )
      .map((player: PlayerType, i: number) => (
        <TableRow key={player.Pin_Player} player={player} i={i} />
      ));
  }

  if (error) throw new Error("Chyba pri načítavaní dát: " + error.message);

  if (!players) notFound();

  return (
    <table>
      <caption>
        <h1>Aktuálny rating slovenských hráčov</h1>
        <button onClick={() => setActive(!active)}>
          {active ? "Zobraziť neaktívnych hráčov" : "Skryť neaktívnych hráčov"}
        </button>
      </caption>
      <TableHead />
      <tbody>{generateRow(players, active)}</tbody>
    </table>
  );
}
