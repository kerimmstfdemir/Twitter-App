import Sidebar from "../../components/Sidebar/Sidebar"
import HomePageFlow from "../../components/HomePageFlow/HomePageFlow"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <HomePageFlow />
    </div>
  )
}

export default Home