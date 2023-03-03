import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useEffect, useState } from "react";
import "../css/CardTrack.css"
import { useTrackData } from "../data/audios";
import { useCurrentSong } from "../hook/useCurrentSong";
import { useModalFlag } from "../hook/useModalFlaf";
import { CardTrackProps } from "../types/CardTrackProps";
// import { songsData } from "../data/audios";, setCurrentSong, currentSong

export function CardTrack(props: CardTrackProps) {
    // const { tracksData: songsData } = useTrackData();
    // const { modalFlag, setModalFlag } = useModalFlag();
    // const {currentTrack: currentSong, setCurrentTrack: setCurrentSong} = useCurrentSong(songsData);
    // const [currentTrack, setCurrentTrack] = useState(songsData[1]);

    // const hendlerTrackCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    //     setModalFlag(true);
    //     setCurrentSong(props);
    // }

    // useEffect(() => {
    //     // console.log(currentSong);
    // }, [currentSong, modalFlag])

    return (
        <>
            <div className="card-track" 
            // onClick={
            //     // hendlerTrackCardClick
            // }
            >
                <div className="card-track_img-container">
                    <img src={props.preViewImagePath} alt="превью" />
                </div>
                <h1>{props.nameTrack}</h1>
                <h2>{props.authorTrack}</h2>
            </div>
        </>
    )
}