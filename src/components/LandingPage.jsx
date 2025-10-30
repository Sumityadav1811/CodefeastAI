import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import ChatContainer from "./ChatContainer";
import InputArea from "./InputArea";
import TypingIndicator from "./TypingIndicator";
import { GoogleGenAI } from "@google/genai";

const LandingPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [modelName, setModelName] = useState("gemini-2.5-flash-lite");

  const aiClient = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    const savedTheme = localStorage.getItem("chatTheme");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        localStorage.removeItem("chatMessages");
      }
    }
    if (savedTheme) setIsDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatTheme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async (msgText = input) => {
    if (!msgText.trim()) return;
    const userMsg = { id: Date.now(), role: "user", content: msgText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    try {
      const response = await aiClient.models.generateContent({
        model: modelName,
        contents: msgText,
      });
      const aiMsg = {
        id: Date.now() + 1,
        role: "assistant",
        content: response.text || "⚠️ No response from AI.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "⚠️ Error while getting AI response.",
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <div
      className={`h-screen flex flex-col transition-all ${
        isDark ? "bg-[#1e1e1e] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        clearChat={clearChat}
        messages={messages}
      />
      <ChatContainer
        messages={messages}
        isDark={isDark}
        chatContainerRef={chatContainerRef}
      />
      {isTyping && <TypingIndicator isDark={isDark} />}
      <InputArea
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        isTyping={isTyping}
        isDark={isDark}
        inputRef={inputRef}
        modelName={modelName}
        setmodelname={setModelName}
      />
    </div>
  );
};

export default LandingPage;
