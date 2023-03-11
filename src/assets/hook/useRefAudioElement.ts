import { useRef } from "react";

// Элемент audio (Трек)
export function useRefAudioElement() {
    const audioElement = useRef(document.createElement('audio'));

    return { audioElement }
}