import "./user-tweets.css"
import Post from "../Posts/Post";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function UserTweets() {
  const { posts } = useSelector((state) => state.postsSlice);
  const { userInfo: { displayName } } = useSelector((state) => state.loginInfos);

  const userPosts = posts.filter((post) => post.username === displayName);

  return (
    <div className="flow">
        <div className="flow__header">
            <h2>Your Tweets</h2>
        </div>
        <FlipMove>
      {userPosts.map((post) => (
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

export default UserTweets;