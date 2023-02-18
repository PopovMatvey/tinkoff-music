import React, { useState } from "react";
import "../css/ModalTrack.css"
import { useModalFlag } from "../hook/useModalFlaf";
import { CardTrackProps } from "../types/CardTrackProps";

export function ModalTrack(props: CardTrackProps) {
    const { modalFlag, setModalFlag } = useModalFlag();

    // 
    const heandlerModalClickArea = (event: React.MouseEvent<HTMLDivElement>) => {
        setModalFlag(false);
    }

    const hendlerPlayButtomClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const audioPanel = document.querySelectorAll('.modal-container_audio audio');

        // audioPanel.play();

        console.log(audioPanel);
    }

    return (
        <>
            {modalFlag &&
                <>
                    <div className="modal-background" onClick={heandlerModalClickArea} />
                    <div className="modal-container">
                        <div className="modal-container_img">
                            <img src={props.preViewImagePath} alt="превью" />
                        </div>
                        <div className="modal-container_audio" >
                            <audio controls id="audioMusic">
                                <source src={props.trackPath} type="audio/mpeg"  />
                                Тег audio не поддерживается вашим браузером.
                            </audio>
                        </div>
                        <h1>{props.nameTrack}</h1>
                        <h2>{props.authorTrack}</h2>
                        <div className="modal-container_tool-bar">
                            <button className="modal-container_tool-bar__mix"></button>
                            <button className="modal-container_tool-bar__prev"></button>
                            <button className="modal-container_tool-bar__play" onClick={
                                // hendlerPlayButtomClick
                                () => {
                                    console.log(document.querySelector('#audioMusic'));
                                }
                            }>

                            </button>
                            <button className="modal-container_tool-bar__next"></button>
                            <button className="modal-container_tool-bar__repeate"></button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}