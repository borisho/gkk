"use client";

import { PlayerType } from "@appTypes/rating";
import { getGrade } from "@ratingComponents/RatingHelper";

export default function TableRow({
  player,
  i,
}: {
  player: PlayerType;
  i: number;
}) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>
        <a
          href={
            process.env.NEXT_PUBLIC_EGD_DB +
            "Player_Card.php?&key=" +
            player.Pin_Player
          }
        >
          {player.Pin_Player}
        </a>
      </td>
      <td>{player.Last_Name}</td>
      <td>{player.Name}</td>
      <td>{player.Country_Code}</td>
      <td>{player.Club}</td>
      <td>{getGrade(player)}</td>
      <td>{player.Gor}</td>
      <td>{player.Tot_Tournaments}</td>
      <td>{player.EGF_Placement === "0" ? "-" : player.EGF_Placement}</td>
      <td>
        <a
          href={
            process.env.NEXT_PUBLIC_EGD_DB +
            "Tournament_Card.php?&key=" +
            player.Last_Appearance +
            "&pin=" +
            player.Pin_Player
          }
        >
          {player.Last_Appearance}
        </a>
      </td>
    </tr>
  );
}
