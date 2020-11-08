import { Avatar } from "@material-ui/core";
import React from "react";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./PostComments.css";

function PostComments({ userInfo, comment }) {
  return (
    <>
      <div className="show-tweet-comments">
        <div className="comment-info">
          <div className="comment-userInfo">
            <div className="comment-user-info">
              <Avatar />
              <h4>Moaml Riad</h4>
              <p>@moamlrh</p>
              <span>44m</span>
            </div>
            <MoreHorizIcon />
          </div>
          <span className="comment-replying">
            Replying to @PostCreaterUsername
          </span>
          <div className="comment-content">
            <p>{comment.content}</p>
          </div>
          <div className="comment-reactions">
            <ModeCommentOutlinedIcon />
            <RepeatOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <ShareOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostComments;
