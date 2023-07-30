import "./sidebar.css";
import SidebarSettings from "./SidebarSettings";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeTab } from "../../redux/features/sidebarSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.sidebarSlice)

  return (
    <div className="sidebar">

      <SidebarSettings active={activeTab === "Home"} Icon={HomeIcon} text="Home" onClick={(e) => dispatch(changeTab({ activeTab: "Home" }))} />
      <SidebarSettings active={activeTab === "Explore"} Icon={SearchIcon} text="Explore" onClick={(e) => dispatch(changeTab({ activeTab: "Explore" }))} />
      <SidebarSettings Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarSettings Icon={MailOutlineIcon} text="Messages" />
      <SidebarSettings Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarSettings Icon={ListAltIcon} text="Lists" />
      <SidebarSettings Icon={PermIdentityIcon} text="Profile" />

    </div>
  );
}

export default Sidebar;