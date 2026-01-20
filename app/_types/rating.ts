export type PlayerType = {
  Pin_Player: string;
  AGAID: string;
  Last_Name: string;
  Name: string;
  Country_Code: string;
  Club: string;
  Grade: string;
  Grade_n: string;
  EGF_Placement: string;
  Gor: string;
  DGor: string;
  Proposed_Grade: string;
  Tot_Tournaments: string;
  Last_Appearance: string;
  Elab_Date: string;
  Hidden_History: string;
  Real_Last_Name: string;
  Real_Name: string;
};

export type RatingResponseType = {
  retcode: string;
  players: PlayerType[];
};
