import React, { useState } from "react";
import "../css/ModalTrack.css"
import { CardTrackProps } from "../types/CardTrackProps";

export function ModalTrack(props: CardTrackProps) {

    const [modalFlag, setModalFlag] = useState(true);


    const heandlerModalClickArea = (event: React.MouseEvent<HTMLDivElement>) => {
        setModalFlag(false);
    }

    return (
        <>
            {modalFlag &&
                <><div className="modal-background" onClick={heandlerModalClickArea} /><div className="modal-container">
                    <div className="modal-container_img">
                        <img src={props.preViewImagePath} alt="превью" />
                    </div>
                    <audio src={props.trackPath}></audio>
                    <h1>{props.nameTrack}</h1>
                    <h2>{props.authorTrack}</h2>
                    <div className="modal-container_tool-bar">
                        <button className="modal-container_tool-bar__mix"></button>
                        <button className="modal-container_tool-bar__prev"></button>
                        <button className="modal-container_tool-bar__play"></button>
                        <button className="modal-container_tool-bar__next"></button>
                        <button className="modal-container_tool-bar__repeate"></button>
                    </div>
                </div></>
            }
        </>
    )
}