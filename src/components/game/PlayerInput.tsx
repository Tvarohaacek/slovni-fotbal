import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, AlertCircle, Send } from 'lucide-react';
import { PlayerInputProps } from '../../types/game';
import { PLAYER_COLORS } from '../../constants/gameConstants';

export const PlayerInput: React.FC<PlayerInputProps> = ({
                                                            player,
                                                            isActive,
                                                            onSubmit,
                                                            disabled,
                                                            expectedStart,
                                                            error
                                                        }) => {
    const [word, setWord] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const playerColors = PLAYER_COLORS[player];

    // Automatické zaměření inputu při aktivaci hráče
    useEffect(() => {
        if (isActive && !disabled && inputRef.current) {
            // Malé zpoždění pro plynulé zaměření
            const timer = setTimeout(() => {
                inputRef.current?.focus();
                inputRef.current?.select(); // Vybere veškerý text (pokud nějaký je)
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [isActive, disabled]);

    const handleSubmit = (e?: React.FormEvent): void => {
        e?.preventDefault();
        const trimmedWord = word.trim();

        if (trimmedWord) {
            onSubmit(trimmedWord);
            setWord('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    };

    const getPlaceholder = (): string => {
        if (expectedStart) {
            return `Zadejte slovo začínající na "${expectedStart.toUpperCase()}"`;
        }
        return "Zadejte první slovo";
    };

    return (
        <Card className={`
            transition-all duration-300
            ${playerColors.bg}
            ${isActive ? `ring-2 ${playerColors.ring} shadow-lg transform scale-105` : 'opacity-75'}
            ${disabled ? 'cursor-not-allowed' : ''}
        `}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Hráč {player}
                    {isActive && (
                        <Badge variant="outline" className="animate-pulse">
                            Na tahu
                        </Badge>
                    )}
                    {!isActive && !disabled && (
                        <Badge variant="secondary" className="opacity-60">
                            Čeká
                        </Badge>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                        <Input
                            ref={inputRef}
                            type="text"
                            value={word}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setWord(e.target.value)
                            }
                            onKeyDown={handleKeyDown}
                            placeholder={getPlaceholder()}
                            disabled={disabled || !isActive}
                            className={`
                                transition-all duration-200
                                ${isActive
                                ? `${playerColors.border} bg-white shadow-sm focus:ring-2 focus:${playerColors.ring}`
                                : 'bg-gray-50 border-gray-200'
                            }
                                ${error ? 'border-red-500 focus:border-red-500' : ''}
                            `}
                            autoComplete="off"
                            spellCheck="false"
                        />
                        {expectedStart && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    {expectedStart.toUpperCase()}*
                                </span>
                            </div>
                        )}
                    </div>

                    <Button
                        type="submit"
                        disabled={disabled || !isActive || !word.trim()}
                        className={`
                            w-full transition-all duration-200 flex items-center gap-2
                            ${playerColors.button}
                            ${disabled || !isActive || !word.trim()
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:scale-105'
                        }
                        `}
                    >
                        <Send className="w-4 h-4" />
                        Odeslat slovo
                        {word.trim() && (
                            <span className="ml-2 opacity-75">
                                "{word.trim()}"
                            </span>
                        )}
                    </Button>
                </form>

                {error && (
                    <Alert className="mt-3 border-red-200 bg-red-50 animate-shake">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800">
                            {error}
                        </AlertDescription>
                    </Alert>
                )}

                {isActive && !error && (
                    <div className="mt-3 text-xs text-gray-500 text-center">
                        💡 Tip: Stiskněte Enter pro rychlé odeslání
                    </div>
                )}
            </CardContent>
        </Card>
    );
};