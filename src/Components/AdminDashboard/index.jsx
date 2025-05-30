import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import Main from "./Main";
import Ban from "./UserManagement/Ban";
import Delete from "./UserManagement/Delete";
import Edit from "./UserManagement/Edit";
import View from "./UserManagement/View";
import Engagement from "./Analytics/Engagement";
import Posts from "./Analytics/Posts";
import Views from "./Analytics/Veiws";
import InAppropriateContent from "./ContentModeration/InAppropriateContent";
import PostApproval from "./ContentModeration/PostAproval";
import Notifications from "./Notifications";
import TrafficAnalysis from "./Reports/TrafficAnalysis";
import UserBehavior from "./Reports/UserBehavior";
import AdminPermission from "./RoleBaseAccess/AdminPermission";
import Moderators from "./RoleBaseAccess/Moderators";
import ThemeCustomization from "./SystemSetting/ThemeCustomization";
import WebSetting from "./SystemSetting/WebSetting";

const AdminDashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        {/* Sidebar */}
        <div>
          <AdminDashboardSidebar
            isVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
        </div>
        {/* Main Content */}
        <div
          className={`flex-grow bg-gray-100 h-screen transition-all ${
            isSidebarVisible ? "md:ml-[18.62rem]" : "ml-0"
          } lg:ml-[18.62rem]`}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ban" element={<Ban />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/view" element={<View />} />
            <Route path="/analytics/engagement" element={<Engagement />} />
            <Route path="/analytics/posts" element={<Posts />} />
            <Route path="/analytics/views" element={<Views />} />
            <Route path="/content-moderation/inappropriate-content" element={<InAppropriateContent />} />
            <Route path="/content-moderation/post-approval" element={<PostApproval />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports/traffic-analysis" element={<TrafficAnalysis />} />
            <Route path="/reports/user-behavior" element={<UserBehavior />} />
            <Route path="/role-base-access/admin-permission" element={<AdminPermission />} />
            <Route path="/role-base-access/moderators" element={<Moderators />} />
            <Route path="/system-setting/theme-customization" element={<ThemeCustomization />} />
            <Route path="/system-setting/web-setting" element={<WebSetting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
