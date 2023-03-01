import React, { useState } from "react";
import { useAudioData } from "../data/audios";

export function useModalFlag() {
    const { songsData } = useAudioData();
    const [modalFlag, setModalFlag] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsData[1]);

    return { modalFlag, setModalFlag, currentSong, setCurrentSong }
}