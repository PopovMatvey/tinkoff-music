import { useState } from "react";
import { CardTrackProps } from "../types/CardTrackProps";

// Текущий трек (CardTrackProps)
export function useCurrentSong(songsData: CardTrackProps[]) {
    const [currentTrack, setCurrentTrack] = useState(songsData[0]);
    const [currentArrayTracks, setCurrentArrayTrack] = useState(songsData)

    return { currentTrack, setCurrentTrack, songsData, currentArrayTracks, setCurrentArrayTrack }
}

