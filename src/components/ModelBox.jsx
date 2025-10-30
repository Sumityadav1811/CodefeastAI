import { Plus } from "lucide-react";
import React, { useState } from "react";

const ModelBox = ({ modelName, setModelName }) => {
  const [displayModels, setdisplayModels] = useState(false);
  const models = [
    "gemini-2.5-pro",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
  ];
  return (
    <div
      className="p-2 text-3xl relative"
      onClick={() => {
        console.log("clicked");
        setdisplayModels(!displayModels);
        console.log(displayModels);
      }}
    >
      <Plus />

      {displayModels && (
        <div
          className="absolute bottom-full mb-6 left-[90px] -translate-x-1/2
                     bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                     rounded-lg shadow-lg flex flex-col text-base z-50 min-w-[180px]"
        >
          {models.map((model, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                modelName === model ? "font-semibold text-blue-600" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setModelName(model);
                setdisplayModels(false);
              }}
            >
              {model}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelBox;
