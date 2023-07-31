import "./sidebar.css";
import SidebarSettings from "./SidebarSettings";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from '@mui/icons-material/Twitter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeTab } from "../../redux/features/sidebarSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.sidebarSlice)

  return (
    <div className="sidebar">

      <SidebarSettings active={activeTab === "Home"} Icon={HomeIcon} text="Home" onClick={(e) => dispatch(changeTab({ activeTab: "Home" }))} />
      <SidebarSettings active={activeTab === "YourTweets"} Icon={TwitterIcon} text="Your Tweets" onClick={(e) => dispatch(changeTab({ activeTab: "YourTweets" }))} />
      <SidebarSettings active={activeTab === "Explore"} Icon={SearchIcon} text="Explore" onClick={(e) => dispatch(changeTab({ activeTab: "Explore" }))} />
      <SidebarSettings active={activeTab === "Trends"} Icon={TrendingUpIcon} text="Trends" onClick={(e) => dispatch(changeTab({ activeTab: "Trends" }))} />

    </div>
  );
}

export default Sidebar;