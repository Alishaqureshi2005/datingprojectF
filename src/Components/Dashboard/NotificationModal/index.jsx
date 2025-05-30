import React, { useState, useRef, useEffect } from "react";

const NotificationModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState("all");
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const notifications = [
        { id: 1, name: "Muhammad Khan", action: "added a new photo.", time: "2025-01-24T10:00:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 2, name: "Zeeshan Ali", action: "commented on your post.", time: "2025-01-25T12:30:00Z", profileImg: "https://placehold.co/40", read: true },
        { id: 3, name: "Farhan Malik", action: "and 2 other friends had birthdays on January 24.", time: "2025-01-25T10:15:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 4, name: "Hamza Shah", action: "and 3 other friends had birthdays yesterday.", time: "2025-01-25T20:00:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 5, name: "John Doe", action: "liked your photo.", time: "2025-01-25T14:45:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 6, name: "Jane Smith", action: "shared your post.", time: "2025-01-26T02:20:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 7, name: "Ali Khan", action: "updated their profile picture.", time: "2025-01-21T09:50:00Z", profileImg: "https://placehold.co/40", read: true },
        { id: 8, name: "Sara Ahmed", action: "sent you a friend request.", time: "2025-01-22T07:00:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 9, name: "Michael Brown", action: "started following you.", time: "2025-01-25T23:00:00Z", profileImg: "https://placehold.co/40", read: true },
        { id: 10, name: "Emily Davis", action: "reacted to your post.", time: "2025-01-24T10:15:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 11, name: "Chris Johnson", action: "invited you to an event.", time: "2025-01-24T19:30:00Z", profileImg: "https://placehold.co/40", read: true },
        { id: 12, name: "Anna Wilson", action: "mentioned you in a comment.", time: "2025-01-25T16:10:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 13, name: "David Lee", action: "posted in your group.", time: "2025-01-24T22:00:00Z", profileImg: "https://placehold.co/40", read: false },
        { id: 14, name: "Sophia Turner", action: "shared a memory.", time: "2025-01-23T11:30:00Z", profileImg: "https://placehold.co/40", read: true },
        { id: 15, name: "Zara Ali", action: "added a new video.", time: "2025-01-20T06:40:00Z", profileImg: "https://placehold.co/40", read: false },
    ];

    const formatTimeDifference = (timestamp) => {
        const now = new Date();
        const notificationTime = new Date(timestamp);
        const differenceInMs = now - notificationTime;

        const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
        if (hours < 24) return `${hours}h`;

        const days = Math.floor(hours / 24);
        return `${days}d`;
    };

    const sortedNotifications = [...notifications].sort(
        (a, b) => new Date(b.time) - new Date(a.time)
    );

    const filteredNotifications =
        filter === "unread"
            ? sortedNotifications.filter((notification) => !notification.read)
            : sortedNotifications;

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2">
                <i className="fas fa-bell text-white text-xl"></i>
            </button>

            {isOpen && (
                <div ref={modalRef} className="absolute -right-16 mt-2 w-[21rem] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="text-xl font-bold">Notifications</h2>
                        <div className="flex mt-2">
                            <button
                                className={`font-semibold mr-4 ${
                                    filter === "all" ? "text-blue-600" : "text-gray-600"
                                }`}
                                onClick={() => setFilter("all")}
                            >
                                All
                            </button>
                            <button
                                className={`font-semibold ${
                                    filter === "unread" ? "text-blue-600" : "text-gray-600"
                                }`}
                                onClick={() => setFilter("unread")}
                            >
                                Unread
                            </button>
                        </div>
                    </div>
                    <div className="p-4 h-[520px] overflow-y-auto scrollbar">
                        <div className="space-y-4">
                            {filteredNotifications.map((notification) => (
                                <div key={notification.id} className="flex items-center">
                                    <img
                                        src={notification.profileImg}
                                        alt={`Profile picture of ${notification.name}`}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="ml-3">
                                        <p className="text-sm">
                                            <span className="font-semibold">
                                                {notification.name}
                                            </span>{" "}
                                            {notification.action}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {formatTimeDifference(notification.time)}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <i
                                            className={`fas fa-circle text-xs ${
                                                notification.read ? "text-white" : "text-blue-600"
                                            }`}
                                        ></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationModal;
