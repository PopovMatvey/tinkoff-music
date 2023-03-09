import { useState } from "react";

// Проигрывание трека (Булево)
export function useIsPlaying() {
    const [isPlaying, setIsPlaying] = useState(false);

    return { isPlaying, setIsPlaying }
}