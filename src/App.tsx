//import React from 'react';
import { GameHeader } from './components/layout/GameHeader';
import { GameTimer } from './components/game/GameTimer';
import { WordChain } from './components/game/WordChain';
import { PlayerInput } from './components/game/PlayerInput';
import { GameStatus } from './components/game/GameStatus';
import { GameRules } from './components/game/GameRules';
import { useGameState } from './hooks/useGameState';
import { useGameTimer } from './hooks/useGameTimer';

export default function SlovniFotbal(): JSX.Element {
    const {
        gameState,
        currentPlayer,
        words,
        errors,
        winner,
        handleWordSubmit,
        restartGame,
        getExpectedStart
    } = useGameState();

    const { timeLeft, addBonusTime, resetTimer } = useGameTimer(gameState, currentPlayer, (winner) => {
        // Tady vyvoláš konec hry při vypršení času
        alert(`Vypršel čas! Vyhrává hráč ${winner}`);
        // Nebo použij vlastní logiku konce hry
    });

    // Obal handleWordSubmit, aby po správném slově přidal čas
    const handleWordSubmitWithBonus = async (word: string) => {
        await handleWordSubmit(word, (error) => {
            if (!error) {
                addBonusTime(currentPlayer);
            }
        });
    };


    // Obal restart hry tak, aby se i resetoval čas
    const handleRestart = () => {
        restartGame();
        resetTimer();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 p-4">
            <div className="max-w-6xl mx-auto">
                <GameHeader onRestart={handleRestart} />

                <GameStatus
                    gameState={gameState}
                    winner={winner}
                    onRestart={handleRestart}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <GameTimer
                        timeLeft={timeLeft[1]}
                        isActive={currentPlayer === 1 && gameState === 'playing'}
                        player={1}
                    />
                    <GameTimer
                        timeLeft={timeLeft[2]}
                        isActive={currentPlayer === 2 && gameState === 'playing'}
                        player={2}
                    />
                </div>

                <WordChain words={words} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PlayerInput
                        player={1}
                        isActive={currentPlayer === 1}
                        onSubmit={handleWordSubmitWithBonus}
                        disabled={gameState === 'finished'}
                        expectedStart={getExpectedStart()}
                        error={errors[1]}
                    />
                    <PlayerInput
                        player={2}
                        isActive={currentPlayer === 2}
                        onSubmit={handleWordSubmitWithBonus}
                        disabled={gameState === 'finished'}
                        expectedStart={getExpectedStart()}
                        error={errors[2]}
                    />
                </div>

                <GameRules />
            </div>
        </div>
    );
}