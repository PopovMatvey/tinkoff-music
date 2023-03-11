import { useAudioArray as useTrackArray } from "../hook/useAudioArray";
import { CardTrackProps } from "../types/CardTrackProps";

// Данные о треках
export function useTrackData() {
    const arrayAudios = useTrackArray();
    const tracksData: CardTrackProps[] = fillAudioArray(arrayAudios.arrayAudio);

    function fillAudioArray(parArray: any) {
        let returnedArray = []

        for (let i = 0; i < parArray.length; i++) {
            returnedArray.push(
                {
                    index: i,
                    nameTrack: parArray[i].title,
                    authorTrack: parArray[i].author,
                    preViewImagePath: "/tracks/images/Travis_Scott_Astroworld.jpg",
                    genre: parArray[i].genre,
                    trackPath: "tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
                    progress: 0,
                    length: 0,
                }
            );
        }

        return returnedArray;
    }

    return {
        tracksData
    }
}
