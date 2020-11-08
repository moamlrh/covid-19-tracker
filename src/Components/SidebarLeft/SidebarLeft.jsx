import React from "react";
import "./SidebarLeft.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import NotificationsTwoToneIcon from "@material-ui/icons/NotificationsTwoTone";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import TurnedInNotTwoToneIcon from "@material-ui/icons/TurnedInNotTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import Menu from "./Menu";
import ProfileIcon from "./ProfileIcon";
import DialogTwett from "../Body/utili/DialogTwett";
import SideLeftOptions from "./SideLeftOptions";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link, useHistory } from "react-router-dom";

const sideLedtOptions = [
  { text: "Home", urlSrc: "/", Icon: HomeTwoToneIcon },
  { text: "Explore", urlSrc: "/explore", Icon: SearchOutlinedIcon },
  {
    text: "Notifications",
    urlSrc: "/notifications",
    Icon: NotificationsTwoToneIcon,
  },
  { text: "Messages", urlSrc: "/messages", Icon: MailOutlineTwoToneIcon },
  { text: "Bookmarks", urlSrc: "/bookmarks", Icon: TurnedInNotTwoToneIcon },
  { text: "Lists", urlSrc: "/lists", Icon: ListAltTwoToneIcon },
  { text: "Profile", urlSrc: "/profile", Icon: PersonOutlineRoundedIcon },
];

function SidebarLeft() {
  const [activeOption, setActiveOption] = React.useState(false);
  const history = useHistory();
  return (
    <div className="sidebar-left" id="sidebar-left">
      <div className="twitter-logo" id="options" onClick={() => history.push("/")}>
        <TwitterIcon className="logo" />
      </div>
      {sideLedtOptions.map((option, index) => (
        <Link
          onClick={() => setActiveOption(option.text)}
          className="sidebar-options-link"
          key={index}
          to={option.urlSrc}
        >
          <SideLeftOptions
            text={option.text}
            Icon={option.Icon}
            activeOption={activeOption}
          />
        </Link>
      ))}
      <div>
        <div className="sidebar-left-hom-menu">
          <Menu />
        </div>
      </div>
      <div className="sidebar-left-tweet">
        <DialogTwett />
      </div>
      <div className="sidebar-left-avatar">
        <ProfileIcon />
      </div>
    </div>
  );
}

export default SidebarLeft;
