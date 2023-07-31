/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar"
import HomePageFlow from "../../components/HomePageFlow/HomePageFlow"
import "./home.css"
import { useSelector, useDispatch } from "react-redux"
import { getDatabase, onValue, ref } from "firebase/database"
import app from "../../authentication/firebase";
import { getPosts } from "../../redux/features/postsSlice";
import UserTweets from "../../components/UserTweets/UserTweets";
import OtherUserTweets from "../../components/UserTweets/OtherUserTweets";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsSlice)

  useEffect(() => {
    const database = getDatabase(app);
    const postsRef = ref(database, "/tweets")

    onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      const postsArray = []

      for (let id in data) {
        const verified = data[id].verified === "true" ? true : false;
        postsArray.push({ id, ...data[id], verified });
      }
      dispatch(getPosts({ posts: postsArray.reverse() }))
    })
  }, [])

  const { activeTab } = useSelector((state) => state.sidebarSlice)
  return (
    <div className="home">
      <Sidebar />
      {activeTab === "Home" && <HomePageFlow posts={posts}/>}
      {activeTab === "YourTweets" && <UserTweets posts={posts}/>}
      {activeTab === "Explore" && <OtherUserTweets posts={posts}/>}
    </div>
  )
}

export default Home