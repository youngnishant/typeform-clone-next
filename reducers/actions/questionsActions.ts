export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_INDUSTRY = "SET_INDUSTRY";

export type QuestionsActionsType =
  | { type: "SET_FIRST_NAME"; payload: string }
  | {
      type: "SET_LAST_NAME";
      payload: string;
    }
  | {
      type: "SET_INDUSTRY";
      payload: string;
    };