import "./App.css";
import AvalaiblePlayers from "./Available-Players/AvalaiblePlayers";
import SelectedPlayers from "./Selecter-Players/SelectedPlayers";
 import { ToastContainer} from 'react-toastify';
import Navbar from "./Navbar/Navbar";
import { Suspense, useState } from "react";



const fetchPLayers = fetch("../public/player.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

   const removePlayer = (p) =>{
    const fileteredData = purchasedPlayers.filter(ply=> ply.player_name!==p.player_name)
    console.log(p)
    setPurchasedPlayers(fileteredData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className=" max-w-[1200px] mx-auto flex items-center justify-between p-4 mb-4">
        <h1 className="font-bold text-2xl">{
            toggle === true? "Available Players": `Selected Players (${purchasedPlayers.length}/6)`
          }</h1>
        <div className="flex justify-between items-center">
          <button onClick={()=>setToggle(true)} className={`border border-r-0 ${toggle === true?"bg-[#E7FE29]":""}  border-gray-400 p-3 rounded-l-2xl`}>
            Available
          </button>
          <button onClick={()=>setToggle(false)} className={`border-1 border-l-0 ${toggle === false?"bg-[#E7FE29]":""}  border-gray-400 p-3 rounded-r-2xl`}>
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvalaiblePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} fetchPLayers={fetchPLayers}></AvalaiblePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
