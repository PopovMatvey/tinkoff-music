import { useEffect, useState } from "react";
import axios from "axios";
import { urlGetDataAudio } from "../data/urlGetAudio";

// Массив треков (CardTrackProps[])
export function useAudioArray() {
    const [arrayAudio, setArrayAudio] = useState([]);

    async function featchAudioArray() {
        try {
            const response = await axios.get(urlGetDataAudio);

            setArrayAudio(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        featchAudioArray();
    }, [])

    return { arrayAudio };
}