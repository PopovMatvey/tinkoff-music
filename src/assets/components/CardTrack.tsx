import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useEffect } from "react";
import "../css/CardTrack.css"
import { useModalFlag } from "../hook/useModalFlaf";
import { CardTrackProps } from "../types/CardTrackProps";

export function CardTrack(props: CardTrackProps) {

    const { modalFlag, setModalFlag } = useModalFlag();

    const hendlerTrackCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setModalFlag(true);
        // console.log(props);
    }

    useEffect(() => {
        // console.log(props);
    }, [])

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