import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Clock, User } from 'lucide-react';
import { GameTimerProps } from '../../types/game';
import { GAME_CONSTANTS, PLAYER_COLORS } from '../../constants/gameConstants';
import { formatTime, isLowTime } from '../../utils/gameUtils';

export const GameTimer: React.FC<GameTimerProps> = ({ timeLeft, isActive, player }) => {
    const percentage = (timeLeft / GAME_CONSTANTS.INITIAL_TIME) * 100;
    const isTimeLow = isLowTime(timeLeft, GAME_CONSTANTS.LOW_TIME_THRESHOLD);
    const playerColors = PLAYER_COLORS[player];

    return (
        <div className={`
            p-4 rounded-lg transition-all duration-300
            ${playerColors.bg} 
            ${isActive ? `ring-2 ${playerColors.ring} shadow-lg` : ''}
        `}>
            <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4" />
                <span className="font-medium">Hráč {player}</span>
                {isActive && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Na tahu
                    </span>
                )}
                <span className={`
                    text-lg font-bold ml-auto
                    ${isTimeLow ? 'text-red-600 animate-pulse' : playerColors.text}
                `}>
                    {formatTime(timeLeft)}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-gray-500" />
                <Progress
                    value={percentage}
                    className={`
                        h-2 flex-1 transition-colors duration-300
                        ${isTimeLow ? 'bg-red-200' : 'bg-gray-200'}
                    `}
                />
            </div>

            {isTimeLow && (
                <div className="mt-2 text-xs text-red-600 font-medium text-center">
                    ⚠️ Málo času!
                </div>
            )}
        </div>
    );
};