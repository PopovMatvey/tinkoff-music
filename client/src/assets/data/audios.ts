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
                    preViewImagePath: `/tracks/images/images_tracks/${i}.jpg`,
                    genre: parArray[i].genre,
                    trackPath: `tracks/audio/music_tracks/${i}.mp3`,
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
