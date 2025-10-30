import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

const MessageBox = ({ message, isDark }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`relative rounded-2xl px-4 py-3 max-w-[75%] leading-relaxed ${
          message.role === "user"
            ? "bg-blue-500 text-white"
            : isDark
            ? "bg-gray-800 text-gray-100"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <ReactMarkdown
          components={{
            code({ inline, className, children }) {
              const match = /language-(\w+)/.exec(className || "");
              if (!inline) {
                const code = String(children).replace(/\n$/, "");
                return (
                  <div className="relative">
                    <button
                      onClick={() => copyCode(code)}
                      className="absolute top-1 right-2 text-xs"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match ? match[1] : "javascript"}
                      PreTag="div"
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                );
              }
              return <code className="text-blue-500">{children}</code>;
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MessageBox;
