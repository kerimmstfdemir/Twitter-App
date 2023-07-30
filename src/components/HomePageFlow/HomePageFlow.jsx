import PostTweet from "../PostTweet/PostTweet";
import Post from "../Posts/Post";
import "./home-page-flow.css";
import FlipMove from "react-flip-move";

const HomePageFlow = ({ posts }) => {
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
