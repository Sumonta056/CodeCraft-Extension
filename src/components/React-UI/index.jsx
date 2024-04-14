import React from "react";
import { reactUI } from "../../data.js";
import { FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-2">
      {reactUI.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center p-4 transition-shadow duration-200 bg-white border rounded  group hover:shadow-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:bg-orange-200"
        >
          <div className="">{icon.image}</div>
          {/* Display the icon above the heading */}
          <h2 className="mt-2 font-bold text-center text-gray-700 text-md">
            {icon.name}
          </h2>
          <p className="mt-1 text-xs text-center text-gray-600">
            {icon.description}
          </p>{" "}
          {/* Display the description under the heading with smaller text */}
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 mt-5 text-sm text-white border-2 rounded-md hover:border-violet-400 hover:bg-violet-400 bg-rose-400 border-rose-400 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] "
          >
            <FaExternalLinkAlt className="w-3 h-3 mr-1" />
            Click Here
          </a>
        </div>
      ))}
    </div>
  );
};

export default Index;
