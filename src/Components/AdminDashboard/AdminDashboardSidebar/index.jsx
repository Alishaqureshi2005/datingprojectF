import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dp from "../../../assets/Images/profile_png/dp.png";

const features = [
  {
    name: "User Management",
    dropdowns: [
      { value: "View", icon: "fa-eye", path: "/admin-dashboard/view" },
      { value: "Edit", icon: "fa-edit", path: "/admin-dashboard/edit" },
      { value: "Delete", icon: "fa-trash", path: "/admin-dashboard/delete" },
      { value: "Ban Users", icon: "fa-ban", path: "/admin-dashboard/ban" },
    ],
  },
  {
    name: "Content Moderation",
    dropdowns: [
      { value: "Approve/Reject Posts", icon: "fa-check-circle", path: "/admin-dashboard/content-moderation/post-approval" },
      { value: "Remove Inappropriate Content", icon: "fa-trash-alt", path: "/admin-dashboard/content-moderation/inappropriate-content" },
    ],
  },
  {
    name: "Analytics",
    dropdowns: [
      { value: "Views", icon: "fa-chart-bar", path: "/admin-dashboard/analytics/views" },
      { value: "Posts", icon: "fa-file-alt", path: "/admin-dashboard/analytics/posts" },
      { value: "User Engagement", icon: "fa-users", path: "/admin-dashboard/analytics/engagement" },
    ],
  },
  {
    name: "Notifications",
    dropdowns: [
      { value: "Alerts for Suspicious Activity or New Content", icon: "fa-bell", path: "/admin-dashboard/notifications" },
    ],
  },
  {
    name: "System Settings",
    dropdowns: [
      { value: "Website Settings", icon: "fa-cogs", path: "/admin-dashboard/system-setting/web-setting" },
      { value: "Theme Customization", icon: "fa-paint-brush", path: "/admin-dashboard/system-setting/theme-customization" },
    ],
  },
  {
    name: "Reports",
    dropdowns: [
      { value: "User Behavior", icon: "fa-user-circle", path: "/admin-dashboard/reports/user-behavior" },
      { value: "Traffic Analysis", icon: "fa-chart-line", path: "/admin-dashboard/reports/traffic-analysis" },
    ],
  },
  {
    name: "Role-Based Access",
    dropdowns: [
      { value: "Differentiated Permissions for Admins", icon: "fa-key", path: "/admin-dashboard/role-base-access/admin-permission" },
      { value: "Moderators", icon: "fa-user-shield", path: "/admin-dashboard/role-base-access/moderators" },
    ],
  },
];

const AdminDashboardSidebar = ({ isVisible, toggleSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dashboardOpen, setDashboardOpen] = useState(true);

  const toggleDropdown = (key) => {
    setActiveDropdown((prevKey) => (prevKey === key ? null : key));
  };

  const toggleDashboard = () => {
    setDashboardOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`bg-gradient-to-b lg:translate-x-0 scrollbar from-blue-500 to-teal-400 text-white p-4 fixed top-16 left-0 shadow-md h-[93vh] sm:h-[91vh] overflow-y-scroll transition-transform transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-64 p-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <Link to="/admin-dashboard">
          <img src={Dp} alt="Profile" className="rounded-full w-20 h-20 mb-2" />
         
          </Link>
          <span className="text-sm">EHT</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full bg-transparent border border-white rounded-full py-1 px-3 text-sm placeholder-white"
            placeholder="Search..."
          />
          <i className="fas fa-search absolute right-3 top-2 text-white"></i>
        </div>

        {/* Feature List */}
        <ul className="space-y-4">
          <li>
            {/* Dashboard Dropdown */}
            <div
              className="flex mb-4 items-center cursor-pointer"
              onClick={toggleDashboard}
            >
              <i className="fas fa-home mr-2"></i>
              <span>Dashboard</span>
              <i
                className={`fas ml-auto ${
                  dashboardOpen ? "fa-chevron-down" : "fa-angle-right"
                }`}
              ></i>
            </div>
            {dashboardOpen && (
              <ul className="space-y-4 ml-6">
                {features.map((feature, index) => (
                  <li key={index}>
                    <div
                      className="flex mb-4 items-center cursor-pointer"
                      onClick={() => toggleDropdown(feature.name)}
                    >
                      <i
                        className={`fas ${
                          activeDropdown === feature.name
                            ? "fa-chevron-down"
                            : "fa-angle-right"
                        } mr-2`}
                      ></i>
                      <span>{feature.name}</span>
                    </div>
                    {activeDropdown === feature.name && (
                      <ul className="ml-6 space-y-2">
                        {feature.dropdowns.map((subOption, subIndex) => (
                          <li key={subIndex} className="flex items-center">
                            <i className={`fas ${subOption.icon} mr-2`}></i>
                            <Link
                              to={subOption.path}
                              className="text-white hover:underline"
                              onClick={toggleSidebar}
                            >
                              {subOption.value}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Close button for small screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 right-4 text-white text-xl"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default AdminDashboardSidebar;
