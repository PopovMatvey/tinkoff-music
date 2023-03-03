import React, { useEffect, useRef, useState } from "react";
import "../css/ModalTrack.css"
// import { songsData } from "../data/audios";
import { useModalFlag } from "../hook/useModalFlaf";
import { CardTrackProps } from "../types/CardTrackProps";
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
// import { refModal } from "../hook/refNavigatorBarElement";
import { useTrackData } from "../data/audios";

export function ModalTrack(props: CardTrackProps) {
    // const { tracksData: songsData } = useTrackData();
    // const { modalFlag, setModalFlag } = useModalFlag();
    // // const modalRef = refModal();

    //
    // const heandlerModalClickArea = (event: React.MouseEvent<HTMLDivElement>) => {
    //     setModalFlag(false);
    // }

    // const clickRef = useRef(document.createElement("div"));
    // const [songs] = useState(songsData);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [currentSong, setCurrentSong] = useState(songsData[1]);
    // const audioElement = useRef(document.createElement("audio"));

    // // При проигрывании
    // const onPlaying = () => {
    //     const commonTimeSong = audioElement.current.duration;
    //     const currentTimeSonf = audioElement.current.currentTime;

    //     setCurrentSong({ ...currentSong, "progress": currentTimeSonf / commonTimeSong * 100, "length": commonTimeSong })
    // }

    // // нажатие на кноку "Пуск"
    // const heandlerPlayPause = () => {
    //     setIsPlaying(!isPlaying);
    // }

    // // Изменение времени в прогресс баре
    // const heandlerChangeCurrentTime = (event: any) => {
    //     let currentTime = Number(clickRef.current?.clientWidth);
    //     const offset = event.nativeEvent.offsetX;
    //     const progressBlock = offset / currentTime * 100;

    //     audioElement.current.currentTime = progressBlock / 100 * currentSong.length;
    // }

    // // Предыдущая песня
    // const heandlerSkipBack = () => {
    //     const index = songs.findIndex((parSong: { nameTrack: string; }) => parSong.nameTrack === currentSong.nameTrack);

    //     if (index === 0) {
    //         setCurrentSong(songs[songs.length - 1])
    //     }
    //     else {
    //         setCurrentSong(songs[index - 1])
    //     }

    //     setIsPlaying(true);
    //     audioElement.current.currentTime = 0;
    // }

    // // Следующая песня
    // const heandlerSkipToNext = () => {
    //     const indexNext = songs.findIndex((parSong: { nameTrack: string; }) => parSong.nameTrack === currentSong.nameTrack);

    //     if (indexNext === songs.length - 1) {
    //         setCurrentSong(songs[0])
    //     }
    //     else {
    //         setCurrentSong(songs[indexNext + 1])
    //     }

    //     setIsPlaying(true);
    //     audioElement.current.currentTime = 0;
    // }

    // // проиграть аудио
    // const playAudio = () => {
    //     audioElement.current.play();
    // }

    // // Остановить аудио
    // const stopAudio = () => {
    //     audioElement.current.pause();
    // }

    // useEffect(() => {
    //     if (isPlaying) {
    //         playAudio();
    //     }
    //     else {
    //         stopAudio();
    //     }
    // }, [isPlaying]);

    return (
        <>
            {/* {modalFlag &&
                <>
                    <div className="modal-background" onClick={heandlerModalClickArea} />
                    <div className="modal-container">
                        <div className="modal-container_img">
                            <img src={currentSong.preViewImagePath} alt="превью" />
                        </div>
                        <div className="modal-container_navigation">
                            <div className="modal-container_navigation_wrapper" onClick={heandlerChangeCurrentTime} ref={clickRef}>
                                <div className="modal-container_seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
                            </div>
                        </div>
                        <div className="modal-container_audio" >
                            <audio src={currentSong.trackPath} ref={audioElement} onTimeUpdate={onPlaying} />
                        </div>
                        <h1>{currentSong.nameTrack}</h1>
                        <h2>{currentSong.authorTrack}</h2>
                        <div className="modal-container_tool-bar">

                            <div className="modal-container_controls">
                                <BsFillSkipStartCircleFill className='modal-container_btn_action' onClick={heandlerSkipBack} />
                                {isPlaying ? <BsFillPauseCircleFill className='modal-container_btn_action modal-container_pp' onClick={heandlerPlayPause} /> : <BsFillPlayCircleFill className='btn_action modal-container_pp' onClick={heandlerPlayPause} />}
                                <BsFillSkipEndCircleFill className='modal-container_btn_action' onClick={heandlerSkipToNext} />
                            </div></div>
                    </div>
                </> 
            }*/}
        </>
    )
}