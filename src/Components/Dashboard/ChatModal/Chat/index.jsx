import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

// Helper function to format time difference
const formatTimeDifference = (timestamp) => {
    const now = Date.now();
    const diff = now - new Date(timestamp).getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years}y`;
    } else if (months > 0) {
        return `${months}m`;
    } else if (weeks > 0) {
        return `${weeks}w`;
    } else if (days > 0) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return `${seconds}s`; // For seconds
    }
};

const Chat = ({ chat, isOpen, toggleModal }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
    };

    return (
        <div className="relative">
            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed bottom-1 right-3 w-80 bg-white rounded-t-lg shadow-lg transition-transform transform translate-y-0"
                    style={{
                        maxHeight: "100vh",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center">
                            <img
                                alt={`Profile picture of ${chat.name}`}
                                className="w-8 h-8 rounded-full"
                                height="32"
                                src={chat.image}
                                width="32"
                            />
                            <span className="ml-2 font-semibold">{chat.name}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <i className="fas fa-phone text-purple-500"></i>
                            <i className="fas fa-video text-purple-500"></i>
                            <i className="fas fa-info-circle text-purple-500"></i>
                            <i
                                className="fas fa-times text-purple-500 cursor-pointer"
                                onClick={toggleModal}
                            ></i>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="p-4 overflow-y-auto h-[50vh] scrollbar">
                        {chat.messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-start  p-2 rounded-lg m-2 ${message.status === "sended" ? "items-end bg-gray-300" : "items-start bg-gray-100"
                                    }`}
                            >
                                <span className="text-sm">{message.sendMessage}</span>
                                <span className="text-xs text-gray-500">
                                    {formatTimeDifference(message.time)} {/* Display relative time */}
                                </span>
                            </div>
                        ))}
                        <div className="mt-4 text-center text-gray-500 text-xs">
                            <i className="fas fa-lock px-1"></i>
                            <span>
                                Messenger upgraded the security of this chat. New messages and
                                calls are secured with end-to-end encryption.
                            </span>
                            <a className="text-blue-600" href="#">
                                Learn more
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="relative flex items-center justify-between gap-2 p-4 border-t">
                        {/* Left icons */}
                        <div className="flex items-center space-x-3">
                            <i className="fas fa-image text-blue-600"></i>
                            <i className="fas fa-microphone text-blue-600"></i>
                            <i
                                className="fas fa-smile text-blue-600 cursor-pointer"
                                onClick={toggleEmojiPicker}
                            ></i>
                        </div>

                        
                        {showEmojiPicker && (
                            <div className="absolute bottom-16 left-1 z-10" style={{ width: '320px' }}>
                                <div className="w-full overflow-hidden">
                                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                                </div>
                            </div>
                        )}





                        {/* Right input and send button */}
                        <div className="flex items-center space-x-2 border-2 rounded-full px-2">
                            <input
                                className="w-full px-4 py-2 border-none focus:outline-none rounded-l-full"
                                placeholder="Aa"
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                type="button"
                            >
                                <i className="fas fa-paper-plane"></i> {/* Send icon */}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
