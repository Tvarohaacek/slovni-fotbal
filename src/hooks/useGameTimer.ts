import { useState, useEffect, useCallback } from 'react';
import { GameState, Player, TimeLeft, UseGameTimerReturn } from '../types/game';
import { GAME_CONSTANTS } from '../constants/gameConstants';

export const useGameTimer = (
    gameState: GameState,
    currentPlayer: Player,
    onTimeUp: (winner: Player) => void
): UseGameTimerReturn => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        1: GAME_CONSTANTS.INITIAL_TIME,
        2: GAME_CONSTANTS.INITIAL_TIME
    });

    // Funkce pro přidání bonusového času
    const addBonusTime = useCallback((player: Player) => {
        setTimeLeft(prev => ({
            ...prev,
            [player]: prev[player] + GAME_CONSTANTS.BONUS_TIME
        }));
    }, []);

    // Funkce pro reset časovače
    const resetTimer = useCallback(() => {
        setTimeLeft({
            1: GAME_CONSTANTS.INITIAL_TIME,
            2: GAME_CONSTANTS.INITIAL_TIME
        });
    }, []);

    // Hlavní timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (gameState === 'playing') {
            interval = setInterval(() => {
                setTimeLeft(prev => {
                    const newTime = { ...prev };
                    const currentTime = newTime[currentPlayer];

                    if (currentTime > 0) {
                        newTime[currentPlayer] = currentTime - 1;

                        // Kontrola, zda čas nevypršel
                        if (newTime[currentPlayer] === 0) {
                            const winner = currentPlayer === 1 ? 2 : 1;
                            onTimeUp(winner);
                        }
                    }

                    return newTime;
                });
            }, GAME_CONSTANTS.TIMER_INTERVAL);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [gameState, currentPlayer, onTimeUp]);

    return {
        timeLeft,
        addBonusTime,
        resetTimer
    };
};

// Rozšíření typu pro export
export interface UseGameTimerReturnExtended extends UseGameTimerReturn {
    addBonusTime: (player: Player) => void;
    resetTimer: () => void;
}