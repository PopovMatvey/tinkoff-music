import React, { useState } from "react";
import { songsData } from "../data/audios";

export function useModalFlag() {
    const [modalFlag, setModalFlag] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsData[1]);

    return { modalFlag, setModalFlag,currentSong, setCurrentSong }
}