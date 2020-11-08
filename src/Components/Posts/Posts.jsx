import React from "react";
import "./Posts.css";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { ProfileDailog } from "./ProfileDailog";
import PostContent from "./PostContent";

function Posts({ postInfo, FromShowPosts }) {
  const { renderMenu, handleClick } = ProfileDailog();
  const { PostHeader } = PostContent(handleClick);
  return (
    <>
      <div className="posts">
        <div className="post-with-image">
          <div className="post-info">
            {/* ----------------------------------  Name & Time @username & Menu & body content ----------------------------------   */}
            {/* ----------------------------------  Name & Time @username & Menu & body content ----------------------------------   */}
            {PostHeader}
          </div>
          {/* ----------------------------------  Like and Comments and Share ----------------------------------   */}
          <div className="post-reactions-btn">
            <ModeCommentOutlinedIcon />
            <RepeatOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <ShareOutlinedIcon />
          </div>
        </div>
      </div>
      {renderMenu}
    </>
  ); 
}

export default Posts;
