import React from "react";
import PostsMenu from "./PostsMenu";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function PostContent(handleClick) {
  const history = useHistory();

  const PostHeader = (
    <>
      <Link to="/profile" className="link link-post-avatar">
        <div className="post-avatar-div">
          <Avatar
            className="post-avatar show-pop-up-user"
            id="post-avatar-id"
          />
        </div>
      </Link>
      <div className="post-body">
        <div className="post-header">
          <h4>
            <p onMouseEnter={(e) => handleClick(e, {})}>Moaml R.H</p>
            <Link to="/profile" className="link ">
              <span>@moamlrh 3am</span>
            </Link>
          </h4>
          <PostsMenu />
        </div>
        <p onClick={() => history.push("/post/status/12345")}>
          text will <span className="has-hashtag av">#apear</span> here if there
          is found ! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam natus dolores ex eaque expedita eos reiciendis a maiores quo
          qui, iusto iste repellendus odio quam nobis alias tempora recusandae
          consequatur.
        </p>
        <img
          alt="media"
          src="https://live.staticflickr.com/1968/43478217020_5fa22c9265_b.jpg"
        />
      </div>
    </>
  );
  return {
    PostHeader,
  };
}

export default PostContent;
