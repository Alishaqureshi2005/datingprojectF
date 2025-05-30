import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const MenuModal = ({ isOpen, toggleModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click is outside the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };

    // Add event listener to handle clicks
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggleModal]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed mt-14 inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
      {/* Right Half Modal */}
      <div
        ref={modalRef} // Attach the ref to the modal
        className="bg-white h-screen w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 shadow-lg p-6 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Menu</h1>
          <button
            onClick={toggleModal}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {/* Left Menu */}
          <div className="flex flex-col">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search menu"
                className="w-full p-2 border rounded-full bg-gray-100"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Social</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Events",
                    description:
                      "Organize or find events and other things to do online and nearby.",
                    icon: "https://storage.googleapis.com/a1aa/image/4Jxos8QxeiXEHCeXz8ALP5UfKzRHSlYbq3dftOpXcPaN43LQB.jpg",
                  },
                  {
                    title: "Find friends",
                    description: "Search for friends or people you may know.",
                    icon: "https://storage.googleapis.com/a1aa/image/y87zefF3IeWPyoNvirf5xZfRUr2u4pvfPgMd5QN05weV7e9CUA.jpg",
                  },
                  {
                    title: "Groups",
                    description: "Connect with people who share your interests.",
                    icon: "https://storage.googleapis.com/a1aa/image/itdvNJivmEIHKpz2rND2NRUnECsesoBFKenxbr0apqT199CUA.jpg",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-6 h-6"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Create Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold mb-4">Create</h1>
            {[
              {
                title: "Post",
                icon: "https://storage.googleapis.com/a1aa/image/34uRSDcybUqXBNMf3pvLSTNxR6dSFcgM6E1KPiXaLilGf9CUA.jpg",
              },
              {
                title: "Story",
                icon: "https://storage.googleapis.com/a1aa/image/E0WBebNRkizZVKGfXEFvnfoCuWZUQ97kN7ov74Z9yezk33LQB.jpg",
              },
              {
                title: "Reel",
                icon: "https://storage.googleapis.com/a1aa/image/hShpHE8MQk5YPFYIsSF6jv3qL01HTjNBjc0g0lgt5glifeCUA.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6"
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MenuModal;
