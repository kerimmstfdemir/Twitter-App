import React from "react";
import "./sidebar-settings.css";

function SidebarSettings({ active, text, Icon, onClick }) {
  return (
    <div className={`sidebarSetting ${active ? "sidebarSetting--active" : ""}`} onClick={onClick}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarSettings;