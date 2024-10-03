import React from "react";
import { assets, songsData } from "../assets/images/assets";

const Player = () => {
  return (
    <div className="text-white h-[10%] bg-gradient-to-r from-gray-800 to-black flex justify-between items-center px-4 shadow-lg rounded-lg">
      {/* Left section with image and song details */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 h-12 rounded-full object-cover shadow-md" src={songsData[0].image} alt={songsData[0].name} />
        <div>
          <p className="text-lg font-semibold">{songsData[0].name}</p>
          <p className="text-sm text-gray-400">{songsData[0].desc.slice(0, 12)}...</p>
        </div>
      </div>

      {/* Center section with player controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.mini_player_icon}
            alt="Play"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
