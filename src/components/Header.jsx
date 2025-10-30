import React from "react";
import { Trash2, Sun, Moon, BotMessageSquare } from "lucide-react";

const Header = ({ isDark, setIsDark, clearChat, messages }) => (
  <header
    className={`flex justify-between items-center px-6 py-4 border-b ${
      isDark ? "bg-[#1e1e1e] border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <div className="flex items-center gap-3">
      <div>
        <h1 className="text-2xl font-bold bg-blue-500 bg-clip-text text-transparent">
          CodeFeast AI
        </h1>
      </div>
    </div>
    <div className="flex gap-6 justify-around">
      {messages.length > 0 && (
        <button onClick={clearChat} className="hover:text-red-400">
          <Trash2 />
        </button>
      )}

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? (
          <Sun className="text-yellow-500" />
        ) : (
          <Moon className="text-blue-600" />
        )}
      </button>
    </div>
  </header>
);

export default Header;
