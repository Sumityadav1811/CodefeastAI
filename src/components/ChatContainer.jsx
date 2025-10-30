import React from "react";
import MessageBox from "./MessageBox";
import InitialChat from "./InitialChat";

const ChatContainer = ({ messages, isDark, chatContainerRef }) => (
  <div
    ref={chatContainerRef}
    className="flex-1 overflow-y-auto scrollbar-hide px-8 py-6 space-y-6"
  >
    {messages.length === 0 ? (
      <InitialChat isDark={isDark} />
    ) : (
      messages.map((msg, i) => (
        <MessageBox key={msg.id} message={msg} isDark={isDark} />
      ))
    )}
  </div>
);

export default ChatContainer;
