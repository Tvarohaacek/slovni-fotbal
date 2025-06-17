import { useCallback } from 'react'

export const useWordValidation = () => {
    // Async validace přes API
    const checkWordValidity = useCallback(async (word: string): Promise<boolean> => {
        try {
            const response = await fetch(
                `https://cs.wiktionary.org/w/api.php?action=parse&format=json&prop=text&page=${encodeURIComponent(word)}&origin=*`
            )
            const data = await response.json()

            return !data.error && data.parse && data.parse.text
        } catch (error) {
            console.error('Chyba při ověřování slova:', error)
            return word.length >= 2 && /^[a-záčďéěíňóřšťúůýž]+$/i.test(word)
        }
    }, [])

    // Hlavní validační funkce, už musí být async, protože čeká na API
    const validateWord = useCallback(
        async (
            word: string,
            usedWords: Set<string>,
            previousWord?: string
        ): Promise<string | null> => {
            if (!word || word.trim() === '') {
                return 'Slovo nesmí být prázdné.'
            }

            const normalizedWord = word.toLowerCase()

            // Kontrola již použitých slov
            if (usedWords.has(normalizedWord)) {
                return 'Slovo už bylo použito.'
            }

            // Kontrola návaznosti
            if (
                previousWord &&
                previousWord.slice(-1).toLowerCase() !== normalizedWord[0]
            ) {
                return `Slovo musí začínat na písmeno ${previousWord.slice(-1).toLowerCase()}.`
            }

            // Kontrola přes API
            const valid = await checkWordValidity(normalizedWord)
            if (!valid) {
                return 'Slovo není ve slovníku.'
            }

            return null
        },
        [checkWordValidity]
    )

    return { validateWord }
}
