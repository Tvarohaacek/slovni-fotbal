export type GameState = 'waiting' | 'playing' | 'finished';

export type Player = 1 | 2;

export interface TimeLeft {
    1: number;
    2: number;
}

export interface Errors {
    1: string;
    2: string;
}

export interface GameTimerProps {
    timeLeft: number;
    isActive: boolean;
    player: Player;
}

export interface WordChainProps {
    words: string[];
}

export interface PlayerInputProps {
    player: Player;
    isActive: boolean;
    onSubmit: (word: string) => void;
    disabled: boolean;
    expectedStart: string | null;
    error: string;
}

export interface GameStatusProps {
    gameState: GameState;
    winner: Player | null;
    onRestart: () => void;
}

export interface GameHeaderProps {
    onRestart: () => void;
}

export interface UseGameStateReturn {
    gameState: GameState;
    currentPlayer: Player;
    words: string[];
    usedWords: Set<string>;
    errors: Errors;
    winner: Player | null;
    handleWordSubmit: (word: string) => void;
    restartGame: () => void;
    endGame: (winner: Player) => void;
    getExpectedStart: () => string | null;
}

export interface UseGameTimerReturn {
    timeLeft: TimeLeft;
    addBonusTime: (player: Player) => void;
    resetTimer: () => void;
}
