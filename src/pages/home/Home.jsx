import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar"
import HomePageFlow from "../../components/HomePageFlow/HomePageFlow"
import "./home.css"
import { useSelector, useDispatch } from "react-redux"
import { getDatabase, onValue, ref } from "firebase/database"
import app from "../../authentication/firebase";
import { getPosts } from "../../redux/features/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsSlice)

  const getRandomImageURL = () => {
    const imageUrls = [
      "https://picsum.photos/1600/900?random=1",
      "https://picsum.photos/1600/900?random=2",
      "https://picsum.photos/1600/900?random=3",
      "https://picsum.photos/1600/900?random=4",
      "https://picsum.photos/1600/900?random=5",
      "https://picsum.photos/1600/900?random=6",
      "https://picsum.photos/1600/900?random=7",
      "https://picsum.photos/1600/900?random=8",
      "https://picsum.photos/1600/900?random=9",
    ];
  
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }

  useEffect(() => {
    const database = getDatabase(app);
    const postsRef = ref(database, "/tweets")

    onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      const postsArray = []

      for (let id in data) {
        const verified = data[id].verified === "true" ? true : false;
        // GET random image URL
        const randomImageURL = getRandomImageURL();
        postsArray.push({ id, ...data[id], verified, image: randomImageURL });
      }
      dispatch(getPosts({ posts: postsArray.reverse() }))
    })
  }, [])

  const { activeTab } = useSelector((state) => state.sidebarSlice)
  return (
    <div className="home">
      <Sidebar />
      {activeTab === "Home" && <HomePageFlow posts={posts}/>}
    </div>
  )
}

export default Home