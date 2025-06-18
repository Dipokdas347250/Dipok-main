import React, { useState, useEffect } from 'react';
import { FaCommentDots, FaWhatsapp } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowTyping(true), 1000);
    } else {
      setShowTyping(false);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (message.trim()) {
      alert(`Message submitted: ${message}`);
      setMessage('');
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+8801871118902'; // তোমার WhatsApp নম্বর
    const waMessage = encodeURIComponent("Hello! I'm interested in your service.");
    window.open(`https://wa.me/${phoneNumber}?text=${waMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Open Chat"
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg p-4 animate-slide-up">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Live Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 font-bold text-xl"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto text-sm">
            <div className="bg-gray-100 p-2 rounded self-start">
              👋 Hi there! How can I help you today?
            </div>
            {showTyping && (
              <div className="bg-gray-200 px-3 py-2 rounded self-start flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:150ms]"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:300ms]"></div>
              </div>
            )}
          </div>

          {/* Input + Submit */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
