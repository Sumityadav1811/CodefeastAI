import React from "react";
import { Send, Loader2 } from "lucide-react";
import ModelBox from "./ModelBox";

const InputArea = ({
  input,
  setInput,
  handleSend,
  isTyping,
  isDark,
  inputRef,
  modelName,
  setModelName,
}) => (
  <div
    className={` px-4 py-4 items-center${isDark ? "bg-gray-900 " : "bg-white"}`}
  >
    <div
      className={`flex gap-3 items-center rounded-3xl px-5 py-4 ${
        isDark
          ? "bg-gray-800/50 border border-gray-700"
          : "bg-gray-50 border border-gray-200"
      }`}
    >
      {/* still not completed */}
      {/* <ModelBox modelName={modelName} setModelName={setModelName} /> */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        rows="1"
        className={`flex-1 bg-transparent outline-none text-xl  resize-none ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <button
        onClick={() => handleSend()}
        disabled={!input.trim() || isTyping}
        className={`p-3 rounded-2xl ${
          input.trim() && !isTyping
            ? "bg-blue-500 text-white"
            : "bg-gray-700/30 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isTyping ? <Loader2 className="animate-spin" /> : <Send />}
      </button>
    </div>
  </div>
);

export default InputArea;
