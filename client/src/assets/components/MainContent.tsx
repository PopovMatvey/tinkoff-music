import React, { useCallback, useEffect, useState } from "react";
import '../css/MainContent.css';
import "../css/ModalTrack.css";
import "../css/CardTrack.css";
import "../css/SearchPanel.css"
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsFillSkipEndCircleFill, BsFillSkipStartCircleFill } from "react-icons/bs";
import { useTrackData } from "../data/audios";
import { useIsPlaying } from "../hook/useIsPlaying";
import { useCurrentSong } from "../hook/useCurrentSong";
import { useRefNavigatorBarElement } from "../hook/useRefNavigatorBarElement";
import { useModalFlag } from "../hook/useModalFlaf";
import { useRefAudioElement } from "../hook/useRefAudioElement";
import { useSearchInputValue } from "../hook/useSearchInputValue";

// Основной контент
export function MainContent() {
    const { tracksData } = useTrackData();
    const { currentTrack, setCurrentTrack, currentArrayTracks, setCurrentArrayTrack } = useCurrentSong(tracksData);
    const { modalFlag, setModalFlag } = useModalFlag();
    const { isPlaying, setIsPlaying } = useIsPlaying();
    const { navigatorBarElement } = useRefNavigatorBarElement();
    const { audioElement } = useRefAudioElement();
    const { searchInputValue, setSearchInputValue } = useSearchInputValue();

    const [checkFillCurrentTracks, setCheckFillCurrentTracks] = useState(true);

    // Обработка области вокруг модального окна
    const heandlerModalClickArea = (event: React.MouseEvent<HTMLDivElement>) => {
        setModalFlag(false);
    }

    // При проигрывании
    const onPlaying = () => {
        const commonTimeSong = audioElement.current.duration;
        const currentTimeSong = audioElement.current.currentTime;

        setCurrentTrack({ ...currentTrack, "progress": currentTimeSong / commonTimeSong * 100, "length": commonTimeSong })

        if (commonTimeSong === currentTimeSong) {
            setTimeout(() => {
                heandlerSkipToNext();
            }, 2)
        }
    }

    // нажатие на кноку "Пуск"
    const heandlerPlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    // Изменение времени в прогресс баре
    const heandlerChangeCurrentTime = (event: any) => {
        let currentTime = Number(navigatorBarElement.current?.clientWidth);
        const offset = event.nativeEvent.offsetX;
        const progressBlock = offset / currentTime * 100;

        audioElement.current.currentTime = progressBlock / 100 * currentTrack.length;
    }

    // Предыдущая песня
    const heandlerSkipBack = () => {
        const index = tracksData.findIndex((parSong: { nameTrack: string; }) => parSong.nameTrack === currentTrack.nameTrack);

        if (index === 0) {
            setCurrentTrack(tracksData[tracksData.length - 1])
        }
        else {
            setCurrentTrack(tracksData[index - 1])
        }

        setIsPlaying(true);
        audioElement.current.currentTime = 0;
    }

    // Следующая песня
    const heandlerSkipToNext = () => {
        const indexNext = tracksData.findIndex((parSong: { nameTrack: string; }) => parSong.nameTrack === currentTrack.nameTrack);

        if (indexNext === tracksData.length - 1) {
            setCurrentTrack(tracksData[0])
        }
        else {
            setCurrentTrack(tracksData[indexNext + 1])
        }

        setIsPlaying(true);
        audioElement.current.currentTime = 0;
    }

    // проиграть аудио
    const playAudio = useCallback(() => {
        try {
            audioElement.current.play();
        } catch (e: any) {
            console.log(e);
        }
    }, [audioElement])

    // Остановить аудио
    const stopAudio = useCallback(() => {
        try {
            audioElement.current.pause();
        } catch (e: any) {
            console.log(e);
        }
    }, [audioElement])


    useEffect(() => {
        if (isPlaying) {
            playAudio();
        }
        else {
            stopAudio();
        }

        if ((currentArrayTracks.length === 0)) {
            setCurrentArrayTrack(tracksData);
        }
    }, [isPlaying, playAudio, stopAudio, tracksData, currentArrayTracks, setCurrentArrayTrack]);

    const heandlerSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currenSearchInputValue = event.target.value;

        setSearchInputValue(currenSearchInputValue);

        setCurrentArrayTrack(
            findDetermBooks(currenSearchInputValue, tracksData)
        );
    }

    function findDetermBooks(parInputText: string, parArray: any) {
        const regString = `^${parInputText}`;
        const regex = new RegExp(regString, 'i');

        return searchBook(parArray, regex);
    }

    function searchBook(parArray: any, parRegex: any) {
        const returnedArray = [];

        for (let i = 0; i < parArray.length; i++) {
            if (parRegex.exec(parArray[i].nameTrack) !== null) {
                returnedArray.push(
                    parArray[i]
                )
            }
        }

        if (returnedArray.length === 0) {
            setCheckFillCurrentTracks(false);

            return [{}];
        }

        setCheckFillCurrentTracks(true);

        return returnedArray;
    }

    return (
        <>
            <div className="main-content">
                <div className="main-content_container">
                    <div className="main-content_content__search-panel">
                        <div className="main-content_content__search-panel_element">
                            <h3>Поиск</h3>
                            <input type="text" value={searchInputValue} onChange={heandlerSearchInput} />
                        </div>
                    </div>
                    <h1>Главная</h1>
                    <h2>Лучшие треки</h2>
                    <div className="main-content_container__tracks" >

                        {checkFillCurrentTracks && currentArrayTracks.map((element: any) => (

                            <div className="card-track_container" key={element.index}>
                                <div className="card-track" onClick={
                                    () => {
                                        setModalFlag(true);
                                        setCurrentTrack(tracksData[element.index]);
                                    }
                                }>
                                    <div className="card-track_img-container">
                                        <img src={element.preViewImagePath} alt="превью" />
                                    </div>
                                    <h1>{element.nameTrack}</h1>
                                    <h2>{element.authorTrack}</h2>
                                </div>
                            </div>
                        ))}

                        {!checkFillCurrentTracks && <p>Список пуст</p>}
                    </div>
                </div>
            </div>
            {
                modalFlag &&
                <>
                    <div className="modal-background" onClick={heandlerModalClickArea} />
                    <div className="modal-container" key={currentTrack.index}>
                        <div className="modal-container_img">
                            <img src={currentTrack.preViewImagePath} alt="превью" />
                        </div>
                        <div className="modal-container_navigation">
                            <div className="modal-container_navigation_wrapper" onClick={heandlerChangeCurrentTime} ref={navigatorBarElement}>
                                <div className="modal-container_seek_bar" style={{ width: `${currentTrack.progress + "%"}` }}></div>
                            </div>
                        </div>
                        <div className="modal-container_audio" >
                            <audio key={currentTrack.index} src={currentTrack.trackPath} ref={audioElement} onTimeUpdate={onPlaying} />
                        </div>
                        <h1>{currentTrack.nameTrack}</h1>
                        <h2>{currentTrack.authorTrack}</h2>
                        <div className="modal-container_tool-bar">
                            <div className="modal-container_controls">
                                <BsFillSkipStartCircleFill className='modal-container_btn_action' onClick={heandlerSkipBack} />
                                {isPlaying ? <BsFillPauseCircleFill className='modal-container_btn_action modal-container_pp' onClick={heandlerPlayPause} /> : <BsFillPlayCircleFill className='btn_action modal-container_pp' onClick={heandlerPlayPause} />}
                                <BsFillSkipEndCircleFill className='modal-container_btn_action' onClick={heandlerSkipToNext} />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
