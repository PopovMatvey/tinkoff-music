import React, { useEffect, useRef, useState } from "react";
import '../css/MainContent.css'
import "../css/ModalTrack.css"
import "../css/CardTrack.css"
import { CardTrack } from "./CardTrack";
import { ModalTrack } from "./ModalTrack";
import { refModal } from "../hook/refModal";
import { useModalFlag } from "../hook/useModalFlaf";
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsFillSkipEndCircleFill, BsFillSkipStartCircleFill } from "react-icons/bs";
import { useAudioArray } from "../hook/audioArray";
import { useAudioData } from "../data/audios";

export function MainContent() {
    const { songsData } = useAudioData();
    const { modalFlag, setModalFlag, currentSong, setCurrentSong } = useModalFlag();
    const clickRef = useRef(document.createElement("div"));
    const [songs] = useState(songsData);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElement = useRef(document.createElement("audio"));

    // Обработка области вокруг модального окна
    const heandlerModalClickArea = (event: React.MouseEvent<HTMLDivElement>) => {
        setModalFlag(false);
    }

    // При проигрывании
    const onPlaying = () => {
        const commonTimeSong = audioElement.current.duration;
        const currentTimeSonf = audioElement.current.currentTime;

        setCurrentSong({ ...currentSong, "progress": currentTimeSonf / commonTimeSong * 100, "length": commonTimeSong })
    }

    // нажатие на кноку "Пуск"
    const heandlerPlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    // Изменение времени в прогресс баре
    const heandlerChangeCurrentTime = (event: any) => {
        let currentTime = Number(clickRef.current?.clientWidth);
        const offset = event.nativeEvent.offsetX;
        const progressBlock = offset / currentTime * 100;

        audioElement.current.currentTime = progressBlock / 100 * currentSong.length;
    }

    // Предыдущая песня
    const heandlerSkipBack = () => {
        const index = songsData.findIndex((parSong: { nameTrack: string; }) => parSong.nameTrack === currentSong.nameTrack);

        if (index === 0) {
            setCurrentSong(songsData[songsData.length - 1])
        }
        else {
            setCurrentSong(songsData[index - 1])
        }

        setIsPlaying(true);
        audioElement.current.currentTime = 0;
    }

    // Следующая песня
    const heandlerSkipToNext = () => {
        const indexNext = songsData.findIndex((parSong: { nameTrack: string; }) => parSong.nameTrack === currentSong.nameTrack);

        if (indexNext === songsData.length - 1) {
            setCurrentSong(songsData[0])
        }
        else {
            setCurrentSong(songsData[indexNext + 1])
        }

        setIsPlaying(true);
        audioElement.current.currentTime = 0;
    }

    // проиграть аудио
    const playAudio = () => {
        audioElement.current.play();
    }

    // Остановить аудио
    const stopAudio = () => {
        audioElement.current.pause();
    }

    useEffect(() => {
        if (isPlaying) {
            playAudio();
        }
        else {
            stopAudio();
        }
    }, [isPlaying]);

    return (
        <>
            <div className="main-content">
                <div className="main-content_container">
                    <h1>Главная</h1>
                    <h2>Лучшие треки</h2>
                    <div className="main-content_container__tracks">
                        {songsData.map((element: any) => (
                            <>
                                <div className="card-track" key={element.index} onClick={
                                    () => {
                                        setModalFlag(true);
                                        setCurrentSong(songsData[element.index]);
                                    }
                                }>
                                    <div className="card-track_img-container">
                                        <img src={element.preViewImagePath} alt="превью" />
                                    </div>
                                    <h1>{element.nameTrack}</h1>
                                    <h2>{element.authorTrack}</h2>
                                </div>
                            </>
                        )
                        )}
                    </div>
                </div>
            </div>
            {
                modalFlag &&
                <>
                    <div className="modal-background" onClick={heandlerModalClickArea} />
                    <div className="modal-container" key={currentSong.index}>
                        <div className="modal-container_img">
                            <img src={currentSong.preViewImagePath} alt="превью" />
                        </div>
                        <div className="modal-container_navigation">
                            <div className="modal-container_navigation_wrapper" onClick={heandlerChangeCurrentTime} ref={clickRef}>
                                <div className="modal-container_seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
                            </div>
                        </div>
                        <div className="modal-container_audio" >
                            <audio key={currentSong.index} src={currentSong.trackPath} ref={audioElement} onTimeUpdate={onPlaying} />
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
            }
        </>
    )
}
