import { useEffect, useState } from "react";
import axios from "axios";

// Массив треков (CardTrackProps[])
export function useAudioArray() {
    const [arrayAudio, setArrayAudio] = useState([]);

    async function featchAudioArray() {
        try {
            const response = await axios.get('http://localhost:2000/api/mail/');

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