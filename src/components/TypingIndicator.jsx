import React from "react";
import { Loader2 } from "lucide-react";

const TypingIndicator = ({ isDark }) => (
  <div className="flex justify-start px-6 mb-4">
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        isDark ? "bg-gray-800/70" : "bg-gray-200/80"
      }`}
    >
      <Loader2 className="animate-spin w-6 h-6 text-blue-500" />
      <span className="text-sm text-gray-400">Getting Response ....</span>
    </div>
  </div>
);

export default TypingIndicator;
