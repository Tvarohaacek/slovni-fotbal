import React from 'react';
import { GameHeaderProps } from '@/types/game.ts';

export const GameHeader: React.FC<GameHeaderProps> = () => {
    return (
        <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-800">
                    Slovní fotbal
                </h1>
            </div>
            <p className="text-gray-600">
                Hra pro dva hráče - vytvořte co nejdelší řetězec slov!
            </p>
        </div>
    );
};
