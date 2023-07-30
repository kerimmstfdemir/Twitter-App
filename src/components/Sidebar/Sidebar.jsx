import "./sidebar.css";
import SidebarSettings from "./SidebarSettings";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useState } from "react";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <div className="sidebar">

      <SidebarSettings active={activeItem === "Home"} Icon={HomeIcon} text="Home" onClick={() => setActiveItem("Home")} />
      <SidebarSettings active={activeItem === "Explore"} Icon={SearchIcon} text="Explore" onClick={() => setActiveItem("Explore")} />
      <SidebarSettings Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarSettings Icon={MailOutlineIcon} text="Messages" />
      <SidebarSettings Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarSettings Icon={ListAltIcon} text="Lists" />
      <SidebarSettings Icon={PermIdentityIcon} text="Profile" />
     
    </div>
  );
}

export default Sidebar;