import { useEffect } from "react";
import { useAudioArray } from "../hook/audioArray";
import { CardTrackProps } from "../types/CardTrackProps";


export function useAudioData() {
    const arrayAudios = useAudioArray();
    const songsData: CardTrackProps[] = arrayAudios.arrayAudio;

    return {
        songsData
    }
}