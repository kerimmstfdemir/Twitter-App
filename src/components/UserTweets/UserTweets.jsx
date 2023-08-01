import "./user-tweets.css";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import Post from "../Posts/Post";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { getDatabase, ref, remove } from "firebase/database";
import app from "../../authentication/firebase";

function UserTweets() {
  const { posts } = useSelector((state) => state.postsSlice);
  const { userInfo: { displayName } } = useSelector((state) => state.loginInfos);

  const [postItem, setPostItem] = useState(null);

  const userPosts = posts.filter((post) => post.username === displayName);

  const handleDelete = (postId) => {
    const database = getDatabase(app);
    const deletePostRef = ref(database, `/tweets/${postId}`);
    remove(deletePostRef);
    alert("Post deleted successfully..");
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      handleDelete(postItem.id);
    }
  };

  return (
    <div className="flow">
      <div className="flow__header">
        <h2>Your Tweets</h2>
      </div>
      <FlipMove>
      {userPosts.map((post) => (
        <div key={post.id} className="post__container">
          <div className="post__deleteIcon" style={{ display: "flex", justifyContent: "end", width: "80%", minWidth: "400px" }}>
            <IconButton className="delete-icon" onMouseOver={() => setPostItem(post)} onClick={confirmDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            tweetText={post.tweetText}
            avatar={post.avatar}
            image={post.image}
          />
        </div>
      ))}
      </FlipMove>
    </div>
  );
}

export default UserTweets;
