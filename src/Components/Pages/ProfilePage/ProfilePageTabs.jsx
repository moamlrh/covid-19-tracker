import React from "react";
import "./ProfilePageTabs.css";
import ProfileTweetsComp from "./ProfileTweetsComp";
import ProfileTweetsAndRepComp from "./ProfileTweetsAndRepComp";
import ProfileMediaComp from "./ProfileMediaComp";
import ProfileLikesComp from "./ProfileLikesComp";
import { useHistory } from "react-router-dom";

const TabsArr = ["Tweets", "Tweets & replies", "Media", "Likes"];
const tabNameToIndex = {
  0: "tweets",
  1: "with_replies",
  2: "media",
  3: "likes",
  tweets: 0,
  with_replies: 1,
  media: 2,
  likes: 3,
};

function ProfilePageTabs({ tab }) {
  const histroy = useHistory();
  const [selectedTab, setSelectedTab] = React.useState(tabNameToIndex[tab]);

  const handleChange = (index) => {
    histroy.push(tabNameToIndex[index]);
    setSelectedTab(index);
  };
  return (
    <div className="root-tabs-main">
      <div className="tabs-div">
        <div className="tab-items">
          {TabsArr.map((tab, index) => {
            return (
              <span
                className={`${selectedTab === index && "active-tab"}`}
                onClick={() => handleChange(index)}
              >
                {tab}
              </span>
            );
          })}
        </div>
      </div>
      {selectedTab === 0 && <ProfileTweetsComp />}
      {selectedTab === 1 && <ProfileTweetsAndRepComp />}
      {selectedTab === 2 && <ProfileMediaComp />}
      {selectedTab === 3 && <ProfileLikesComp />}
    </div>
  );
}

export default ProfilePageTabs;
