import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvalaiblePlayers = ({ fetchPLayers, setAvailableBalance,availableBalance,setPurchasedPlayers,purchasedPlayers }) => {
  const playerData = use(fetchPLayers);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {
            playerData.map(player=><PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
        }
      
    </div>
  );
};

export default AvalaiblePlayers;
