import React from "react";
import "./ProfilePage.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import ProfilePageTabs from "./ProfilePageTabs";
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ProfilePage(props) {
  const { match } = props;
  const { params } = match;
  const { tab } = params;
  const history = useHistory();

  return (
    <>
      <div className="profile-page-header">
        <div className="header-arrow-back" onClick={() => history.push("/")}>
          <h3>
            <KeyboardBackspaceIcon />
          </h3>
        </div>
        <div className="header-title">
          <h1>Moaml Rh <CheckIcon className="checked-icon" /></h1>
          <p>869 Tweets</p>
        </div>
      </div>
      <div className="profile-background-image">
        <img src="http://placekitten.com/900/900" alt="background" />
      </div>
      <div className="profile-info">
        <div className="profile-info-img">
          <img src="http://placekitten.com/900/800" alt="profile" />
          <div className="img-size-fixed"></div>
          <button className="profile-edit-btn">Edit profile</button>
        </div>
        <div className="profile-user-info">
          <div className="user-info-body">
            <h1>
              Moaml R.H <CheckIcon className="checked-icon" />
            </h1>
            <span>@moamlrh</span>
            <p>javascript and reactjs developer</p>
            <div className="user-location-websit-joined">
              <div>
                <LocationOnIcon className="profile-body-icon" />
                <span>iraq</span>
              </div>
              <div>
                <InsertLinkIcon className="profile-body-icon" />
                <span>
                  <a href="https://www.google.com">www.google.com</a>
                </span>
              </div>
              <div>
                <DateRangeOutlinedIcon className="profile-body-icon" />
                <span>Joined November 2019</span>
              </div>
            </div>
            <div className="user-following">
              <span className="first-span">
                2,313 <p>Following</p>
              </span>
              <span>
                323 <p>Followers</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-home">
        <div className="profile-home-taps">
          <ProfilePageTabs tab={tab} />
        </div>
        {/* <div className="profile-home-posts">Posts will apear here</div> */}
      </div>
    </>
  );
}

export default ProfilePage;
