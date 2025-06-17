export const GAME_CONSTANTS = {
    INITIAL_TIME: 60, // Počáteční čas pro každého hráče (sekundy)
    BONUS_TIME: 5,    // Bonusový čas za správné slovo (sekundy)
    LOW_TIME_THRESHOLD: 10, // Prah pro "málo času" (sekundy)
    TIMER_INTERVAL: 1000,   // Interval pro časovač (milisekundy)
} as const;

export const PLAYER_COLORS = {
    1: {
        bg: 'bg-blue-50',
        border: 'border-blue-500',
        ring: 'ring-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-600'
    },
    2: {
        bg: 'bg-red-50',
        border: 'border-red-500',
        ring: 'ring-red-200',
        button: 'bg-red-600 hover:bg-red-700',
        text: 'text-red-600'
    }
} as const;

export const VALIDATION_MESSAGES = {
    WORD_NOT_IN_DICTIONARY: 'Slovo není ve slovníku',
    WORD_ALREADY_USED: 'Slovo už bylo použito',
    WRONG_STARTING_LETTER: (expectedLetter: string) =>
        `Slovo musí začínat písmenem "${expectedLetter}"`,
    EMPTY_WORD: 'Zadejte slovo'
} as const;