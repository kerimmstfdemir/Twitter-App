/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getDatabase, onValue, ref} from "firebase/database"
import app from "../../authentication/firebase";
import PostTweet from "../PostTweet/PostTweet";
import Post from "../Posts/Post";
import { getPosts } from "../../redux/features/postsSlice";
import "./home-page-flow.css";
import FlipMove from "react-flip-move";

function HomePageFlow() {
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
}, [] )

  return (
    <div className="flow">
      <div className="flow__header">
        <h2>Home</h2>
      </div>

      <PostTweet />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            tweetText={post.tweetText}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default HomePageFlow;