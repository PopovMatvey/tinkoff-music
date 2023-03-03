import { useState } from "react";
import { CardTrackProps } from "../types/CardTrackProps";

// Текущий трек (CardTrackProps)
export function useCurrentSong(songsData: CardTrackProps[]) {
    const [currentTrack, setCurrentSong] = useState(songsData[0]);

    return { currentTrack, setCurrentTrack: setCurrentSong }
}

