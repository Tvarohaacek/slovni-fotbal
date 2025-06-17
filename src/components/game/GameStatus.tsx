import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Trophy, CheckCircle, PlayCircle, RotateCcw } from 'lucide-react';
import { GameStatusProps } from '../../types/game';

export const GameStatus: React.FC<GameStatusProps> = ({
                                                          gameState,
                                                          winner,
                                                          onRestart
                                                      }) => {
    if (gameState === 'waiting') {
        return (
            <Alert className="mb-4 border-blue-200 bg-blue-50">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <PlayCircle className="w-4 h-4" />
                            <span>Hra je připravena k spuštění. Hráč 1 začíná!</span>
                        </div>
                    </div>
                </AlertDescription>
            </Alert>
        );
    }

    if (gameState === 'playing') {
        return (
            <Alert className="mb-4 border-green-200 bg-green-50">
                <PlayCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                    <div className="flex items-center justify-between">
                        <span>🎮 Hra probíhá! Hodně štěstí!</span>
                        <Button
                            onClick={onRestart}
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1 hover:bg-green-100"
                        >
                            <RotateCcw className="w-3 h-3" />
                            Restart
                        </Button>
                    </div>
                </AlertDescription>
            </Alert>
        );
    }

    if (gameState === 'finished') {
        return (
            <Alert className="mb-4 border-yellow-200 bg-yellow-50">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🎉</span>
                            <span className="font-semibold">
                                Hra skončila! Vyhrál Hráč {winner}!
                            </span>
                        </div>
                        <Button
                            onClick={onRestart}
                            size="sm"
                            className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-1"
                        >
                            <RotateCcw className="w-3 h-3" />
                            Nová hra
                        </Button>
                    </div>
                </AlertDescription>
            </Alert>
        );
    }

    return null;
};