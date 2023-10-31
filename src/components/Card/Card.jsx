import React from "react";
import "./Card.css";
import { FaPlay, FaPause } from "react-icons/fa/";
import { useGlobalContext } from '../../states/Contet';
import { useDispatch, useSelector } from "react-redux";
import { pauseSong, playSong } from "../../states/Actors/SongActor";
const Card = ({ song }) => {
    const { masterSong, isPlaying } = useSelector((state) => state.mainSong);
    const dispatch = useDispatch();
    const { resetEverything } = useGlobalContext();

    const handlePlay = (song) => {
        console.log('playing')
        if (isPlaying) {
            masterSong.mp3.currentTime = 0;
            masterSong.mp3.pause();
            resetEverything();
        }
        dispatch(playSong(song));
    };
    const handlePause = () => {
        dispatch(pauseSong());
    };
    return (

        song && (
            <div className="card col-span-1 p-4 rounded-lg">
                <div className="relative">
                    <img src="/assets/card.jpg" className="h-[5rem]" alt="" />
                    {masterSong.id === song.id && isPlaying ? (
                        <button
                            onClick={handlePause}
                            className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
                        >
                            <FaPause className="text-black text-xl" />
                        </button>
                    ) : (
                        <button
                            onClick={() => handlePlay(song)}
                            className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3"
                        >
                            <FaPlay className="text-black text-xl" />
                        </button>
                    )}
                </div>

                <h3 className="text-sm font-semibold my-2">{song.artist}</h3>
                <p className="text-xs text-gray-400 leading-4">
                    {song.title} - {song.artist}
                </p>
            </div>
        )


    );
};

export default Card;
