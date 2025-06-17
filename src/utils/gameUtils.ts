import { Player } from '../types/game';
import { VALIDATION_MESSAGES } from '../constants/gameConstants';

/**
 * Získá poslední písmeno slova (pro navazování)
 */
export const getLastLetter = (word: string): string => {
    return word.toLowerCase().slice(-1);
};

/**
 * Získá první písmeno slova
 */
export const getFirstLetter = (word: string): string => {
    return word.toLowerCase().charAt(0);
};

/**
 * Přepne hráče (1 -> 2, 2 -> 1)
 */
export const switchPlayer = (currentPlayer: Player): Player => {
    return currentPlayer === 1 ? 2 : 1;
};

/**
 * Normalizuje slovo (trim + lowercase)
 */
export const normalizeWord = (word: string): string => {
    return word.trim().toLowerCase();
};

/**
 * Kontroluje, zda je slovo prázdné po normalizaci
 */
export const isWordEmpty = (word: string): boolean => {
    return normalizeWord(word).length === 0;
};

/**
 * Zkontroluje, zda slovo začíná správným písmenem
 */
export function checkWordConnection(previousWord: string, currentWord: string): boolean {
    const lastLetter = normalizeWord(previousWord).slice(-1);
    const firstLetter = normalizeWord(currentWord).charAt(0);
    return firstLetter === lastLetter;
}


/**
 * Převede čas (v sekundách) na formát mm:ss
 */
export const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Vrací true, pokud je čas nižší nebo roven prahu
 */
export const isLowTime = (timeLeft: number, threshold: number): boolean => {
    return timeLeft <= threshold;
};

/**
 * Zkontroluje, zda je slovo platné
 * @param word Slovo zadané hráčem
 * @param expectedLetter Očekávané počáteční písmeno
 * @param usedWords Dosud použitá slova (lowercased)
 * @param dictionary Set slovníku (lowercased)
 * @returns null pokud je slovo platné, nebo chybová hláška
 */
export const validateWord = (
    word: string,
    expectedLetter: string,
    usedWords: Set<string>,
    dictionary: Set<string>
): string | null => {
    const normalized = normalizeWord(word);

    if (isWordEmpty(normalized)) {
        return VALIDATION_MESSAGES.EMPTY_WORD;
    }

    if (!checkWordConnection(normalized, expectedLetter)) {
        return VALIDATION_MESSAGES.WRONG_STARTING_LETTER(expectedLetter);
    }

    if (!dictionary.has(normalized)) {
        return VALIDATION_MESSAGES.WORD_NOT_IN_DICTIONARY;
    }

    if (usedWords.has(normalized)) {
        return VALIDATION_MESSAGES.WORD_ALREADY_USED;
    }

    return null; // valid
};
