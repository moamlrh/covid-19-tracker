import React from "react";
import Posts from "../Posts/Posts";
import FlareOutlinedIcon from "@material-ui/icons/FlareOutlined";
import CreatePost from "../CreatePost/CreatePost";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="header-and-create-post" >
        <h3 style={{fontSize:"20px"}}> 
          <Link to="/" className="sidebar-options-link">
            Home
          </Link>
        </h3>
        <FlareOutlinedIcon fontSize="default" className="header-logo-stars" />
      </div>
      <div className="app-create-post">
        <CreatePost />
      </div>
      <Posts />
      <Posts />
    </>
  );
}

export default HomePage;
