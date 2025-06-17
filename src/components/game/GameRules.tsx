import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Trophy, AlertTriangle, Lightbulb } from 'lucide-react';
import { GAME_CONSTANTS, VALIDATION_MESSAGES } from '@/constants/gameConstants.ts';
import { getDictionarySize } from '@/data/czechDictionary.ts';

export const GameRules: React.FC = () => {
    const dictionarySize = getDictionarySize();

    return (
        <Card className="mt-6 bg-gray-50 border-gray-200">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Pravidla hry
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Základní pravidla */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                            Jak hra funguje?
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Hráči se střídají ve vymýšlení slov.</li>
                            <li>Každé nové slovo musí začínat na poslední písmeno předchozího.</li>
                            <li>Nelze opakovat již použitá slova.</li>
                            <li>Slovo musí existovat ve slovníku ({dictionarySize.toLocaleString()} slov).</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                            <Clock className="w-4 h-4 text-blue-500" />
                            Časový limit
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>
                                Každý hráč má{' '}
                                <Badge variant="outline">{GAME_CONSTANTS.INITIAL_TIME} sekund</Badge> na začátku.
                            </li>
                            <li>
                                Za každé správné slovo získá{' '}
                                <Badge variant="outline">+{GAME_CONSTANTS.BONUS_TIME} s</Badge> bonusového času.
                            </li>
                            <li>
                                Pokud zbývá méně než{' '}
                                <Badge variant="outline">{GAME_CONSTANTS.LOW_TIME_THRESHOLD} s</Badge>, zobrazí se varování.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Další pravidla */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            Neplatná slova
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>{VALIDATION_MESSAGES.WORD_NOT_IN_DICTIONARY}</li>
                            <li>{VALIDATION_MESSAGES.WORD_ALREADY_USED}</li>
                            <li>Použití jiného počátečního písmene než požadovaného je neplatné.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2 text-gray-800">
                            <Trophy className="w-4 h-4 text-green-600" />
                            Konec hry
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Hráč neodpoví v časovém limitu</li>
                            <li>Zadá neplatné nebo opakované slovo</li>
                            <li>Dobrovolně se vzdá</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
