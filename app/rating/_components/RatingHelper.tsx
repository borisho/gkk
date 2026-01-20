import { PlayerType } from "@appTypes/rating";

export function getGrade(player: PlayerType) {
  const rating: number = +player.Gor;

  if (player.Grade.includes("p")) return player.Grade;
  else if (rating >= 2850) return "9d";
  else if (rating >= 2750) return "8d";
  else if (rating >= 2650) return "7d";
  else if (rating >= 2550) return "6d";
  else if (rating >= 2450) return "5d";
  else if (rating >= 2350) return "4d";
  else if (rating >= 2250) return "3d";
  else if (rating >= 2150) return "2d";
  else if (rating >= 2050) return "1d";
  else if (rating >= 1950) return "1k";
  else if (rating >= 1850) return "2k";
  else if (rating >= 1750) return "3k";
  else if (rating >= 1650) return "4k";
  else if (rating >= 1550) return "5k";
  else if (rating >= 1450) return "6k";
  else if (rating >= 1350) return "7k";
  else if (rating >= 1250) return "8k";
  else if (rating >= 1150) return "9k";
  else if (rating >= 1050) return "10k";
  else if (rating >= 950) return "11k";
  else if (rating >= 850) return "12k";
  else if (rating >= 750) return "13k";
  else if (rating >= 650) return "14k";
  else if (rating >= 550) return "15k";
  else if (rating >= 450) return "16k";
  else if (rating >= 350) return "17k";
  else if (rating >= 250) return "18k";
  else if (rating >= 150) return "19k";
  else if (rating >= 50) return "20k";
  else if (rating >= -50) return "21k";
  else if (rating >= -150) return "22k";
  else if (rating >= -250) return "23k";
  else if (rating >= -350) return "24k";
  else if (rating >= -450) return "25k";
  else if (rating >= -550) return "26k";
  else if (rating >= -650) return "27k";
  else if (rating >= -750) return "28k";
  else if (rating >= -850) return "29k";
  else return "30k";
}
