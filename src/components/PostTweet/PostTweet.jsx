/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./post-tweet.css";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { getDatabase, push, ref, set } from "firebase/database";
import app from "../../authentication/firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const { userInfo:{displayName} } = useSelector((state) => state.loginInfos)

  const [date, setDate] = useState("")
  const [imgSrcError, setImgSrcError] = useState(false)
  const [ contentError, setContentError ] = useState(true)

  const [postInfos, setPostInfos] = useState({
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    tweetText: tweetMessage,
    image: tweetImage,
    displayName: displayName,
    username: displayName,
    verified: "true"
  })

  const updateErrors = () => {
    const sendingDate = new Date()

    // Post contents control
    if (tweetMessage.toString().trim().length < 1) {
        setContentError(true);
    } else {
        setContentError(false);
    }

    setDate(sendingDate)
}

  const handleImgUrl = (e) => {
    setTweetImage(e.target.value)
    setImgSrcError(false)
  }
  
  const imgOnError = (e) => {
    e.target.src = "https://about.twitter.com/content/dam/about-twitter/en/our-priorities/open-internet/masthead-desktop-v2.jpg.twimg.1920.jpg"
    setImgSrcError(true)
  }

  const sendTweet = (e) => {
    e.preventDefault();

    if(tweetMessage < 1){
        alert("Your tweet cannot be empty! ")
      }

    if(!contentError) {
        try{
          const database = getDatabase(app);
          const postsRef = push(ref(database, "/tweets"))
    
          set(postsRef, {
            tweetdate:date.toString(),
            ...postInfos,
            tweetText: tweetMessage,
            image: imgSrcError ? "https://about.twitter.com/content/dam/about-twitter/en/our-priorities/open-internet/masthead-desktop-v2.jpg.twimg.1920.jpg" : tweetImage
          })
          setPostInfos({
            avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            tweetText: "",
            image: ""
          })
          setTweetImage("");
          setTweetMessage("");

          alert("Sent your post..")
        }catch(error){
          console.log(error.massage)
          alert("Post failed!")
        } 
      }

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={handleImgUrl}
          className="tweetBox__imageInput"
          placeholder="Enter image or video URL"
          type="text"
        />

        <div>
            <img src={tweetImage} className="img-thumbnail" style={{marginLeft:"1rem", borderRadius:"10px"}} onError={imgOnError} width={450}></img>
        </div>

        <Button
          onClick={sendTweet}
          onMouseOver={updateErrors}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;