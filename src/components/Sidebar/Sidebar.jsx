import "./sidebar.css";
import SidebarSettings from "./SidebarSettings";
import HomeIcon from "@mui/icons-material//Home";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <div className="sidebar">

      <SidebarSettings active Icon={HomeIcon} text="Home" />
      <SidebarSettings Icon={SearchIcon} text="Explore" />
     
    </div>
  );
}

export default Sidebar;