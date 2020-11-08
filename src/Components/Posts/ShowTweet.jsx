import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./ShowTweet.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PostComments from "./PostComments";
import PostsMenu from "./PostsMenu";
import { Avatar } from "@material-ui/core";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

function ShowTweet() {
  const { postId } = useParams();
  const history = useHistory();
  console.log(postId)
  return (
    <div className="show-post">
      <div className="profile-page-header show-post-header">
        <div className="header-arrow-back" onClick={() => history.push("/")}>
          <h3>
            <KeyboardBackspaceIcon />
          </h3>
        </div>
        <div className="header-title">
          <h2>Tweet</h2>
        </div>
      </div>
      <div className="show-tweet-post">
        <div className="st-post-info">
          <div className="post-info-header">
            <Link to="/profile" className="link">
              <div className="st-post-avatar-div">
                <Avatar
                  className="post-avatar show-pop-up-user"
                  id="post-avatar-id"
                />
              </div>
            </Link>
            <div className="post-header-tweet">
              <h3>
                <p>Abbas Riad</p>
                <span>@moamlrh 3am</span>
              </h3>
              <div className="st-icon">
                <PostsMenu />
              </div>
            </div>
          </div>
          <div className="st-post-body">
            <p>
              text will <span className="has-hashtag av">#apear</span> here if
              there is found ! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam natus dolores ex eaque expedita eos
              reiciendis a maiores quo qui, iusto iste repellendus odio quam
              nobis alias tempora recusandae consequatur.
            </p>
            <span className="st-date">
              8:28 PM Nov 7, 2020·Twitter for iPhone
            </span>
          </div>
        </div>
        <div className="st-number-of-reactions">
          <p>
            3 <span>Retweets</span>
          </p>
          <p>
            3 <span>Quote Tweet</span>
          </p>
          <p>
            3 <span>Likes</span>
          </p>
        </div>
      </div>
      <div className="post-reactions-btn st-reaction">
        <ModeCommentOutlinedIcon />
        <RepeatOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <ShareOutlinedIcon />
      </div>
      <div className="show-tweets-comments">
        <div className="st-comments">
          <PostComments
            userInfo="ahmed"
            comment={{
              content: "Great Bro You're awosome",
              commentdbBy: "username and name and avatar",
              time: "23m",
              reactions: "",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowTweet;
