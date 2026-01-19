"use client";

import React, { useState } from "react";
import { PlayerType } from "@appTypes/rating";
import TableHead from "@ratingComponents/TableHead";
import TableRow from "@ratingComponents/TableRow";

export default function RatingTable({ players }: { players: PlayerType[] }) {
  const [active, setActive] = useState(true);

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
