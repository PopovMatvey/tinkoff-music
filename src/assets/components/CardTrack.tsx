import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useEffect, useState } from "react";
import "../css/CardTrack.css"
import { useModalFlag } from "../hook/useModalFlaf";
import { CardTrackProps } from "../types/CardTrackProps";
import { songsData } from "../data/audios";

export function CardTrack(props: CardTrackProps) {

    const { modalFlag, setModalFlag, setCurrentSong, currentSong } = useModalFlag();
    const [currentTrack, setCurrentTrack] = useState(songsData[1]);

    const hendlerTrackCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setModalFlag(true);
        setCurrentSong(props);
    }

    useEffect(() => {
        console.log(currentSong);
    }, [currentSong, modalFlag])

    return (
        <>
            <div className="card-track" onClick={
                hendlerTrackCardClick
            }>
                <div className="card-track_img-container">
                    <img src={props.preViewImagePath} alt="превью" />
                </div>
                <h1>{props.nameTrack}</h1>
                <h2>{props.authorTrack}</h2>
            </div>
        </>
    )
}