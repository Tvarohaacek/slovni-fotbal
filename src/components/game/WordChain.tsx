import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, ArrowRight } from 'lucide-react';
import { WordChainProps } from '../../types/game';

export const WordChain: React.FC<WordChainProps> = ({ words }) => {
    return (
        <Card className="mb-4">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Řetězec slov
                    {words.length > 0 && (
                        <span className="text-sm font-normal text-gray-500">
                            ({words.length} {words.length === 1 ? 'slovo' : words.length < 5 ? 'slova' : 'slov'})
                        </span>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {words.length === 0 ? (
                    <div className="text-center py-8">
                        <div className="text-gray-400 mb-2">
                            <Trophy className="w-12 h-12 mx-auto opacity-50" />
                        </div>
                        <p className="text-gray-500 italic">
                            Zatím žádná slova... Hráč 1 začíná!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Řetězec slov */}
                        <div className="flex flex-wrap items-center gap-2">
                            {words.map((word: string, index: number) => (
                                <React.Fragment key={index}>
                                    <Badge
                                        variant={index % 2 === 0 ? "default" : "secondary"}
                                        className={`
                                            text-sm transition-all duration-300 hover:scale-105
                                            ${index % 2 === 0
                                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                                        }
                                        `}
                                    >
                                        {word}
                                        <span className="ml-1 text-xs opacity-60">
                                            (H{(index % 2) + 1})
                                        </span>
                                    </Badge>
                                    {index < words.length - 1 && (
                                        <ArrowRight className="w-3 h-3 text-gray-400" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Informace o posledním slově */}
                        {words.length > 0 && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-600">
                                    <strong>Posledním písmeno:</strong>{' '}
                                    <span className="font-mono text-lg font-bold text-gray-800">
                                        "{words[words.length - 1].slice(-1).toUpperCase()}"
                                    </span>
                                    <span className="ml-2 text-gray-500">
                                        (další slovo musí začínat tímto písmenem)
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};