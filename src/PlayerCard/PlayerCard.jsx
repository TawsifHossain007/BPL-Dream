import React, { useState } from "react";
import userImg from "../assets/Group.png";
import flagImg from "../assets/report 1.png";
import { toast } from "react-toastify";
const PlayerCard = ({ player, setAvailableBalance, availableBalance,purchasedPlayers,setPurchasedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))

    if(playerPrice > availableBalance){
        toast("You don't have enough balance to select this player.");
        return;
    }
    
    if(purchasedPlayers.length >= 6)
    {
        toast("You can select up to 6 players only.");
        return;
    }

    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
    );

    setPurchasedPlayers([...purchasedPlayers,playerData])
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img src={player.player_image} alt="Shoes" />
      </figure>
      <div className="mt-4">
        <div className="flex items-center">
          <img className="w-[20px] h-[20px]" src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        <div className="flex items-center justify-between mt-4 border-b-1 pb-2 border-gray-200">
          <div className="flex items-center">
            <img src={flagImg} alt="" />
            <span className="ml-2">{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex items-center justify-between mt-2 font-bold">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className=" font-bold">{player.bating_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions flex items-center justify-between mt-4">
          <p className="font-bold">
            Price: $<span>{player.price}</span>
          </p>
          <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
