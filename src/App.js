import React from "react";
import "./App.css";
import SidebarLeft from "./Components/SidebarLeft/SidebarLeft";
import SidebarRight from "./Components/SidebarRight/SidebarRight";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import HomePage from "./Components/Pages/HomePage";
import ShowTweet from "./Components/Posts/ShowTweet";
import SideLeftMenu from "./Components/SidebarLeft/SideLeftMenu"
function App() {
  return (
    <>
      <div className="app">
        <div className="app-sidebar-left" id="side-left">
          <SidebarLeft />
        </div>
        <div className="app-posts">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/explore" />
            <Route exact path="/notifications" />
            <Route exact path="/messages" />
            <Route exact path="/bookmarks" />
            <Route exact path="/lists" component={ProfilePage} />
            <Route exact path="/post/status/:postId" component={ShowTweet} />
            <Redirect exact from="/profile" to="/profile/tweets" />
            <Route
              path="/profile/:tab?"
              render={(props) => <ProfilePage {...props} />}
            />
          </Switch>

        </div>
        <div id="shadow-div"></div>
        <div className="app-sidebar-right">
          <SidebarRight />
        </div>
        <div className="show-sidebar-left-icon">
          <SideLeftMenu />
        </div>
      </div>
    </>
  );
}

export default App;
