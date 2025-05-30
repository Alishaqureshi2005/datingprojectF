import React, { useState, useEffect, useRef } from "react";
import Chat from "./Chat"; // Assuming Chat component is available

const ChatModal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chats, setChats] = useState([]); // State to hold chat data
  const modalRef = useRef(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (chat) => {
    setIsDropdownOpen(false);
    setIsOpen(true);
    setSelectedChat(chat); // Set the selected chat when clicked
  };
  useEffect(() => {
    // Simulating a fetch for chat data (e.g., from an API)
    const fetchChats = () => {
      const chatData = [
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Ajmalkhan Koko",
          messages: [
            { sendMessage: "Hi, Dear", time: "2025-01-23T14:00:00Z", status: "sended" },
            { sendMessage: "How are you doing today?", time: "2025-01-23T14:05:00Z", status: "sended" },
            { sendMessage: "All good! How about you?", time: "2025-01-23T14:10:00Z", status: "received" },
            { sendMessage: "Hi, Dear", time: "2025-01-23T14:00:00Z", status: "sended" },
            { sendMessage: "How are you doing today?", time: "2025-01-23T14:05:00Z", status: "sended" },
            { sendMessage: "All good! How about you?", time: "2025-01-23T14:10:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Zamark Khan Inqilabi",
          messages: [
            { sendMessage: "Zamark Khan sent an attachment.", time: "2025-01-20T16:00:00Z", status: "received" },
            { sendMessage: "Can you check the file I sent?", time: "2025-01-20T16:10:00Z", status: "sended" },
            { sendMessage: "Yes, I will check it now.", time: "2025-01-20T16:15:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Jalil Bacha",
          messages: [
            { sendMessage: "Messages and calls are secured with encryption.", time: "2025-01-18T18:00:00Z", status: "received" },
            { sendMessage: "That's great! Glad to know.", time: "2025-01-18T18:05:00Z", status: "sended" },
            { sendMessage: "I have to send a few files. Can I use the app?", time: "2025-01-18T18:10:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Kalim Ullah",
          messages: [
            { sendMessage: "Messages and calls are secured.", time: "2025-01-15T10:00:00Z", status: "sended" },
            { sendMessage: "That's very reassuring. Let's catch up soon!", time: "2025-01-15T10:05:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Sarahai Sarahai",
          messages: [
            { sendMessage: "Messages and calls are secured.", time: "2025-01-10T08:00:00Z", status: "sended" },
            { sendMessage: "Thanks for the quick response!", time: "2025-01-10T08:05:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Usama Khan",
          messages: [
            { sendMessage: "Can you send me the project details?", time: "2025-01-25T07:30:00Z", status: "sended" },
            { sendMessage: "Sure, I will email them to you soon.", time: "2025-01-25T07:35:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Asad Ali",
          messages: [
            { sendMessage: "Please check your email for updates.", time: "2025-01-22T13:15:00Z", status: "sended" },
            { sendMessage: "Got it. I'll look into it now.", time: "2025-01-22T13:20:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Ahmad Khan",
          messages: [
            { sendMessage: "When is the next team meeting?", time: "2025-01-21T09:45:00Z", status: "received" },
            { sendMessage: "It's scheduled for 3 PM tomorrow.", time: "2025-01-21T09:50:00Z", status: "sended" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Sana Riaz",
          messages: [
            { sendMessage: "Thanks for the quick response!", time: "2025-01-19T11:30:00Z", status: "sended" },
            { sendMessage: "No problem! Happy to help.", time: "2025-01-19T11:35:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Ali Hamza",
          messages: [
            { sendMessage: "Let's finalize the contract today.", time: "2025-01-17T15:00:00Z", status: "sended" },
            { sendMessage: "I'm reviewing it now. I'll get back to you shortly.", time: "2025-01-17T15:10:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Fatima Bibi",
          messages: [
            { sendMessage: "Can you help me with this issue?", time: "2025-01-16T18:00:00Z", status: "received" },
            { sendMessage: "Of course, let me check it for you.", time: "2025-01-16T18:05:00Z", status: "sended" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Hamza Khan",
          messages: [
            { sendMessage: "Here are the photos from the event.", time: "2025-01-15T14:00:00Z", status: "sended" },
            { sendMessage: "I received them. Thanks!", time: "2025-01-15T14:05:00Z", status: "received" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Ayesha Zafar",
          messages: [
            { sendMessage: "Can we reschedule our meeting?", time: "2025-01-14T12:00:00Z", status: "received" },
            { sendMessage: "Yes, let's meet tomorrow instead.", time: "2025-01-14T12:05:00Z", status: "sended" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Hassan Ahmed",
          messages: [
            { sendMessage: "I’ve shared the document you requested.", time: "2025-01-13T09:00:00Z", status: "received" },
            { sendMessage: "Thanks! I'll review it now.", time: "2025-01-13T09:05:00Z", status: "sended" },
          ],
        },
        {
          type: "chat",
          image: "https://placehold.co/48x48",
          name: "Saima Akhtar",
          messages: [
            { sendMessage: "Can you join the call tomorrow?", time: "2025-01-12T16:00:00Z", status: "received" },
            { sendMessage: "Yes, I'll be there at the scheduled time.", time: "2025-01-12T16:05:00Z", status: "sended" },
          ],
        },
      ];
      
      
      // Set the fetched chat data into the state
      setChats(chatData);
    };

    // Fetch chat data when component mounts
    fetchChats();
  }, []); // Empty dependency array to run this effect only once

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatTime = (isoTime) => {
    const date = new Date(isoTime);
    const diff = Date.now() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.3); // Approximation for months
    const years = Math.floor(months / 12);

    if (years > 0) return `${years}y`;
    if (months > 0) return `${months}m`;
    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  };

  // Sort chats by the latest message time
  const sortedChats = chats.sort(
    (a, b) => new Date(b.messages[0].time) - new Date(a.messages[0].time)
  );

  return (
    <div className="relative">
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="px-4 py-2">
        <i className="fas fa-comment text-white text-xl"></i>
      </button>

      {isDropdownOpen && (
        <div
          ref={modalRef}
          className="absolute -right-[7.6rem] mt-2 w-[21rem] bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-4 border-b flex items-center justify-between">
            <h1 className="text-2xl font-bold">Chats</h1>
            {/* <Chat /> */}
            <div className="flex space-x-4">
              <i className="fas fa-expand text-gray-600 cursor-pointer"></i>
              <i className="fas fa-edit text-gray-600 cursor-pointer"></i>
              <i className="fas fa-ellipsis-h text-gray-600 cursor-pointer"></i>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Messenger"
                className="w-full px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none"
              />
              <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
            </div>
          </div>
          <div className="p-4 h-[480px] overflow-y-auto scrollbar">
            <div className="space-y-4">
              {sortedChats.map((chat, index) => (
                <div key={index} className="flex items-center cursor-pointer"
                onClick={() => handleClick(chat)} 
                >
                  <img
                    src={chat.image}
                    alt={`Profile picture of ${chat.name}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{chat.name}</p>
                    <p className="text-sm text-gray-500">
                      {chat.messages[0].sendMessage} {/* You can adjust this for the last message */}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatTime(chat.messages[0].time)} {/* Last message time */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedChat && <Chat chat={selectedChat} isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
};

export default ChatModal;
