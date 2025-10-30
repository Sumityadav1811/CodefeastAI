import React from "react";
import { Zap, Bot, Microscope, BookOpen, Code, Rocket } from "lucide-react";

const fields = [
  {
    icon: <Microscope />,
    text: "Explain quantum computing",
    category: "Science",
  },
  { icon: <BookOpen />, text: "Creative writing tips", category: "Writing" },
  { icon: <Code />, text: "Build a React component", category: "Code" },
  {
    icon: <Rocket />,
    text: "Career advice for developers",
    category: "Career",
  },
];

const SuggestedPrompts = ({ isDark }) => (
  <div className="h-full flex items-center justify-center">
    <div className="text-center max-w-2xl px-4">
      <div className="p-6 rounded-3xl bg-blue-500/10 mb-6 inline-flex">
        <Bot className="w-16 h-16 text-blue-500" />
      </div>
      <h2 className="text-3xl font-bold mb-4 text-blue-500 ">
        Welcome to Codefeast AI Assistant
      </h2>
      <p className={isDark ? "text-gray-400" : "text-gray-600"}>
        Not just an Assistant — A Creative Partner in your Journey
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {fields.map((p, i) => (
          <button
            key={i}
            className={`flex items-center gap-3 p-4 rounded-2xl ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200 hover:border-blue-300"
            }`}
          >
            <span className="text-2xl">{p.icon}</span>
            <div>
              <p className="text-xs text-gray-400">{p.category}</p>
              <p className="font-medium">{p.text}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default SuggestedPrompts;
