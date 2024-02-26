// /hooks/use-media-query.ts
import { useState, useEffect, useCallback } from 'react';

interface MediaQueryListEventMap {
    "change": MediaQueryListEvent;
}

interface MediaQueryList extends EventTarget {
    matches: boolean;
    media: string;
    onchange: (this: MediaQueryList, ev: MediaQueryListEvent) => any;
    addListener(listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void; 
    removeListener(listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void; 
    removeEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
}

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);

    const handleChange = useCallback(() => {
        const mediaQueryList = window.matchMedia(query);
        setMatches(mediaQueryList.matches);
        }, [query]);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        handleChange(); // Initial check on mount 

        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
        }, [handleChange]);

    return matches;
}

export default useMediaQuery;
