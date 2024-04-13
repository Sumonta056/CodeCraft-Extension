import React, { useState } from "react";
import IconSection from "./components/Icons-section/Index";
import FrontendTools from "./components/Frontend-Tools/Index";
import { AiFillBulb } from "react-icons/ai";
import { GoTools } from "react-icons/go";
import Tools from "./assets/tools.png";

const App = () => {
  const [view, setView] = useState("home");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="w-full p-2 bg-stone-200">
      <header className="flex flex-col items-center justify-center w-full p-2 text-violet-900">
        <img src={Tools} alt="ColorHunt" width="60" height="60" />
        <h1 className="pt-2 text-xl font-bold text-center text-bodyColor">
          CodeCraft Extension
        </h1>
        <p className="mt-1 text-center text-gray-500">
          A Complete Toolkit for Software Engineering Students Development Journey.
        </p>
      </header>

      <div className="flex justify-center p-1 space-x-4 ">
        <button
          onClick={() => handleViewChange("IconSection")}
          className={`w-44 justify-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] px-4 py-2 rounded  bg-violet-500 text-white flex gap-2 items-center`}
        >
          <AiFillBulb style={{ color: "white" }} />
          Free Icons
        </button>
        <button
          onClick={() => handleViewChange("FrontendTools")}
          className={`w-44 justify-center px-4 py-2 rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-violet-500 text-white flex gap-2 items-center`}
        >
          <GoTools />
          Frontend Tools
        </button>
      </div>

      <div className="px-2">
        {view === "IconSection" && <IconSection />}
        {view === "FrontendTools" && <FrontendTools />}
      </div>

      <footer className="flex items-center justify-center w-full gap-1 pt-2 pb-3 mt-auto text-base text-center text-gray-500 text">
        <p>🧑🏻‍💻 Developed by</p>
        <a
          href="https://github.com/sumonta056"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-stone-600 hover:underline"
        >
          Sumonta Saha Mridul
        </a>
      </footer>
    </div>
  );
};

export default App;
