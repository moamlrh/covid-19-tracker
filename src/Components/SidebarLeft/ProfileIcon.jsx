import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Avatar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "./ProfileIcon.css";
import CheckIcon from "@material-ui/icons/Check";

function ProfileIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar onClick={handleClick} />
      <div className="avatar-info" onClick={handleClick}>
        <strong>Moaml Rh Js</strong>
        <p>@moamlrh</p>
      </div>
      <div className="arr-icon-hidd-icon">
        <ArrowDropDownIcon fontSize="large" className="arr-icon" />
      </div>
      <div className="profile-icon-menu">
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          PaperProps={{
            style: {
              backgroundColor: "#15202b",
              width: "280px",
              borderRadius: "20px",
              padding: "0px",
              color: "white",
              boxShadow: "1px 1px 10px #464646",
            },
          }}
        >
          <MenuItem
            onClick={handleClose}
            style={{ borderBottom: "1px solid  #38444d" }}
          >
            <div className="profile-icon-userinfo">
              <Avatar />
              <div className="avatar-info" onClick={handleClick}>
                <strong>Moaml Rh Js</strong>
                <p>@moamlrh</p>
              </div>
              <CheckIcon style={{ color: "#1da1f2" }} />
            </div>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{
              borderBottom: "1px solid  #38444d",
              padding: "10px 10px",
              margin: "15px 0px",
            }}
          >
            Add an exisiting account
          </MenuItem>
          <MenuItem onClick={handleClose} style={{ padding: "10px 10px" }}>
            Log out @moamlrh
          </MenuItem>
        </Menu>
        <div
          className="profile-icon-arrow-down"
          style={{ display: !open ? "none" : "block" }}
        >
          <ArrowDropDownIcon style={{ color: "#1da1f2" }} fontSize="large" />
        </div>
      </div>
    </>
  );
}

export default ProfileIcon;
