import "./user-tweets.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import Post from "../Posts/Post";
import FlipMove from "react-flip-move";

const OtherUserTweets = () => {
  const [selectedUsername, setSelectedUsername] = useState("");
  const { posts } = useSelector((state) => state.postsSlice);

  // Remove duplicates by retrieving usernames
  const usernames = Array.from(new Set(posts.map((post) => post.username)));

  // Filtering by username
  const handleUserChange = (event) => {
    setSelectedUsername(event.target.value);
  };

  // Filter posts by selectedUsername
  const filteredPosts = posts.filter(
    (post) => post.username === selectedUsername
  );

  return (
    <div className="flow">
      <div className="flow__header">
        <h2>Explore</h2>
      </div>
      <div>
        <h5>Select User :</h5>
        <select className="form-select" value={selectedUsername} style={{margin:"1rem", width:"95%"}} onChange={handleUserChange}>
          <option value="">--- Select ---</option>
          {usernames.map((username) => (
            <option key={username} value={username}>
              {username}
            </option>
          ))}
        </select>
      </div>
      <div>
        <FlipMove>
        {filteredPosts.map((post) => (
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
    </div>
  );
};

export default OtherUserTweets;
