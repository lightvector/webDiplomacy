import { ScrollButtonState } from "../enums/UIState";

interface gameState {
  seasons: string[];
  currentYear: number;
  currentSeason: string;
}

export interface scrollButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  direction: ScrollButtonState;
  disabled?: boolean;
}

export interface gameStateProps {
  onChangeSeason: (season: string) => void;
  gameState: gameState;
  disabled?: boolean;
}
