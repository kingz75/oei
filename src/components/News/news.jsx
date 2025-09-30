import React, { useState } from "react";
import { Plus, Paperclip, Mic, RotateCcw, LogOut } from "lucide-react";

export default function ChatInterface() {
  const [message, setMessage] = useState("");
  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    if (!hasSentMessage) setHasSentMessage(true);

    setMessage("");
  };

  const handleNewChat = () => {
    setHasSentMessage(false);
    setMessages([]);
    setMessage("");
  };

  return (
    <div className="h-screen flex bg-red-600 p-2">
      {/* Sidebar (fixed) */}
      <div className="w-60 bg-white shadow-md flex flex-col rounded-2xl fixed left-2 top-2 bottom-2">
        <div className="p-4 text-center">
          <h2 className="text-lg font-medium text-gray-800">Chat History</h2>
        </div>
        <div className="flex-1 flex items-start justify-center mt-6 overflow-y-auto">
          <p className="text-gray-500 text-sm">No recent chat history</p>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm">
            <RotateCcw size={16} />
            Clear chat history
          </button>
          <button className="text-gray-600 hover:text-red-600 p-1">
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {/* Main Chat Area (with left margin so it doesn't overlap the fixed sidebar) */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm ml-64">
        {/* Header */}
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-800">
            Welcome, Hudu Abubakar
          </h2>
          <button
            onClick={handleNewChat}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
          >
            <Plus size={16} />
            New Chat
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 flex flex-col bg-white rounded-2xl">
          {messages.length > 0 && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg 
                      max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl 
                      whitespace-pre-wrap break-words
                      ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Initial Centered Input */}
          {!hasSentMessage && (
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xl px-4">
                <div className="relative mb-4">
                  <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <button className="p-3 text-gray-500 hover:text-gray-700 transition-colors">
                      <Paperclip size={20} />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hello, Ask your Question"
                      className="flex-1 bg-transparent px-2 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                      onKeyDown={(e) =>
                        e.key === "Enter" ? handleSendMessage() : null
                      }
                    />
                    <button
                      onClick={handleSendMessage}
                      className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Mic size={16} className="text-white" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Click on the icons for more features
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Input */}
        {hasSentMessage && (
          <div className="border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <button className="p-3 text-gray-500 hover:text-gray-700 transition-colors">
                    <Paperclip size={20} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello, Ask your Question"
                    className="flex-1 bg-transparent px-2 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                    onKeyDown={(e) =>
                      e.key === "Enter" ? handleSendMessage() : null
                    }
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mic size={16} className="text-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
