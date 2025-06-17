import { useState, useCallback } from 'react';
import { GameState, Player, Errors, UseGameStateReturn } from '../types/game';
import { useWordValidation } from './useWordValidation';
import { getLastLetter, switchPlayer } from '../utils/gameUtils';

// Rozšířený typ musí být definovaný před hookem, aby se mohl použít jako návratový typ
export interface UseGameStateReturnExtended extends UseGameStateReturn {
    endGame: (winner: Player) => void;
    handleWordSubmit: (word: string, onResult?: (error: string | null) => void) => void;
}

export const useGameState = (): UseGameStateReturnExtended => {
    const [gameState, setGameState] = useState<GameState>('waiting');
    const [currentPlayer, setCurrentPlayer] = useState<Player>(1);
    const [words, setWords] = useState<string[]>([]);
    const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
    const [errors, setErrors] = useState<Errors>({ 1: '', 2: '' });
    const [winner, setWinner] = useState<Player | null>(null);

    const { validateWord } = useWordValidation();

    const handleWordSubmit = useCallback(
        async (word: string, onResult?: (error: string | null) => void) => {
            const player = currentPlayer
            setErrors((prev) => ({ ...prev, [player]: '' }))

            const previousWord = words.length > 0 ? words[words.length - 1] : undefined

            const validationError = await validateWord(word, usedWords, previousWord)

            if (validationError) {
                setErrors((prev) => ({ ...prev, [player]: validationError }))
                if (onResult) onResult(validationError)
                return
            }

            const normalizedWord = word.toLowerCase()
            setWords((prev) => [...prev, normalizedWord])
            setUsedWords((prev) => new Set([...prev, normalizedWord]))
            setCurrentPlayer(switchPlayer)

            if (gameState === 'waiting') {
                setGameState('playing')
            }

            if (onResult) onResult(null)
        },
        [words, usedWords, validateWord, gameState, currentPlayer]
    )

    const restartGame = useCallback(() => {
        setGameState('waiting');
        setCurrentPlayer(1);
        setWords([]);
        setUsedWords(new Set());
        setErrors({ 1: '', 2: '' });
        setWinner(null);
    }, []);

    const endGame = useCallback((winningPlayer: Player) => {
        setGameState('finished');
        setWinner(winningPlayer);
    }, []);

    const getExpectedStart = useCallback((): string | null => {
        if (words.length === 0) return null;
        const lastWord = words[words.length - 1];
        if (!lastWord) return null;

        return getLastLetter(lastWord);
    }, [words]);

    return {
        gameState,
        currentPlayer,
        words,
        usedWords,
        errors,
        winner,
        handleWordSubmit,
        restartGame,
        endGame,
        getExpectedStart
    };
};
