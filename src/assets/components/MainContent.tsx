import React from "react";
import '../css/MainContent.css'
import { CardTrack } from "./CardTrack";
import { ModalTrack } from "./ModalTrack";

export function MainContent() {
    const assortimentTracksArray = [
        {
            key: 0,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/JackBoys.jpg",
            trackPath: "/tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
        },
        {
            key: 1,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/Travis_Scott_Astroworld.jpg",
            trackPath: "/tracks/audio/travis_scott_-_goosebumps_feat_kendrick_lamar_muzati.net.mp3",
        },
        {
            key: 2,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/JackBoys.jpg",
            trackPath: "/tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
        },
        {
            key: 3,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/Travis_Scott_Astroworld.jpg",
            trackPath: "/tracks/audio/travis_scott_-_goosebumps_feat_kendrick_lamar_muzati.net.mp3",
        },
        {
            key: 4,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/JackBoys.jpg",
            trackPath: "/tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
        },
        {
            key: 5,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/Travis_Scott_Astroworld.jpg",
            trackPath: "/tracks/audio/travis_scott_-_goosebumps_feat_kendrick_lamar_muzati.net.mp3",
        },
        {
            key: 6,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/JackBoys.jpg",
            trackPath: "/tracks/audio/muzlome_Travis_Scott_-_SICKO_MODE_57796090.mp3",
        },
        {
            key: 7,
            nameTrack: "sdfdr",
            authorTrack: "seonfoi",
            preViewImagePath: "/tracks/images/Travis_Scott_Astroworld.jpg",
            trackPath: "/tracks/audio/travis_scott_-_goosebumps_feat_kendrick_lamar_muzati.net.mp3",
        },
    ];

    return (
        <>
            <div className="main-content">
                <div className="main-content_container">
                    <h1>Главная</h1>
                    <h2>Лучшие треки</h2>
                    <div className="main-content_container__tracks">
                        {assortimentTracksArray.map((element: any) => (
                            <CardTrack
                                key={element.key}
                                index={element.key}
                                nameTrack={element.nameTrack}
                                authorTrack={element.authorTrack}
                                preViewImagePath={element.preViewImagePath}
                                trackPath={element.trackPath}
                            />)
                        )}
                    </div>
                </div>
            </div>
            <ModalTrack
                key={assortimentTracksArray[0].key}
                index={assortimentTracksArray[0].key}
                nameTrack={assortimentTracksArray[0].nameTrack}
                authorTrack={assortimentTracksArray[0].authorTrack}
                preViewImagePath={assortimentTracksArray[0].preViewImagePath}
                trackPath={assortimentTracksArray[0].trackPath}
            />
        </>
    )
}