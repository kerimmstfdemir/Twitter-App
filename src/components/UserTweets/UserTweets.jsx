import { useSelector } from "react-redux";
import Post from "../Posts/Post";
import { IconButton } from "@mui/material"; // IconButton ekledik
import DeleteIcon from "@mui/icons-material/Delete"; // DeleteIcon ekledik
import FlipMove from "react-flip-move";

function UserTweets() {
  const { posts } = useSelector((state) => state.postsSlice);
  const { userInfo: { displayName } } = useSelector((state) => state.loginInfos);

  const userPosts = posts.filter((post) => post.username === displayName);

  const handleDelete = (postId) => {
    //! Deleting Process...
    console.log("Delete post with id:", postId);
  };

  return (
    <div className="flow">
        <div className="flow__header">
            <h2>Your Tweets</h2>
        </div>
        <FlipMove>
          {userPosts.map((post) => (
            <div key={post.id}>
              <div className="d-flex justify-content-end">
                <IconButton className="" style={{position:"absolute", marginTop:"1.7rem", marginRight:"12.3rem"}} onClick={() => handleDelete(post.id)}>
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