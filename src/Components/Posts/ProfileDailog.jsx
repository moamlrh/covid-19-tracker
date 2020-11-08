import React, { useState } from "react";
import "./ProfileDailog.css";
import Menu from "@material-ui/core/Menu";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

//  how to use it :
// onMouseEnter={e => handleClick(e,{some data})}

export function ProfileDailog() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  function handleClick(event, { name, user }) {
    setAnchorEl(event.currentTarget);
    setUserInfo({ name, user });
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "310px",
            backgroundColor: " rgb(25, 39, 52)",
            color: "white",
            boxShadow: "1px 1px 10px #464646",
            padding: "10px",
          },
        }}
      >
        <div onMouseLeave={handleClose} className="menu-user-info">
          <Avatar className="user-info-avatar" />
          <button>Following</button>
          <div className="user-info-menu">
            <div className="user-info-details">
              <Link to="/profile" className="link">
                <h4>{userInfo?.name || "Test Name"}</h4>
              </Link>
              <span>@{userInfo?.user}</span>
              <p>description of an acount</p>
              <div className="user-info-followers">
                <h6>
                  10 <span>following</span>
                </h6>
                <h6>
                  102 <span>followers</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
  return {
    handleClick,
    renderMenu,
  };
}
