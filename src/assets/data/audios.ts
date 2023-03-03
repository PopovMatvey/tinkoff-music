import { useAudioArray as useTrackArray } from "../hook/useAudioArray";
import { CardTrackProps } from "../types/CardTrackProps";

// Данные о треках
export function useTrackData() {
    const arrayAudios = useTrackArray();
    const tracksData: CardTrackProps[] = arrayAudios.arrayAudio;

    return {
        tracksData
    }
}