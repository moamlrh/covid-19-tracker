import { Avatar } from "@material-ui/core";
import React from "react";
import "./CreatePost.css";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { createPostTextArea } from "../../Redux/MainActions";
import { connect } from "react-redux";
import EmojiComComp from "./EmojiCom";
import ImageCom from "./ImageCom";

function CreatePost({
  handleTextAreaValueChange,
  textAreaValueState,
  dialogTweets,
}) {
  const {
    ShowImageComp,
    filePath,
    InputFileUploadComp,
    handeUploadIconClicked,
  } = ImageCom(handleTextAreaValueChange, textAreaValueState);

  const handleChangeTextArea = (e) => {
    handleTextAreaValueChange({
      value: e.target.value,
      img: filePath,
    });
  };

  return (
    <div className="create-post-app">
      <div className="main">
        <div className="avatar">
          <Avatar className="avatar-logo" />
        </div>
        <div className="create-post">
          {/* ----------------------------------  Text Area ----------------------------------   */}
          <div className="input-text">
            <textarea
              id="textarea"
              placeholder="what's happening?"
              value={textAreaValueState.value}
              onChange={handleChangeTextArea}
              className={dialogTweets && dialogTweets}
            ></textarea>
            {ShowImageComp}
          </div>
          {/* ----------------------------------  Icons And Button ----------------------------------   */}
          <div className="create-post-footer">
            <div className="create-post-footer-icons">
              {InputFileUploadComp}
              <ImageOutlinedIcon
                className="footer-icon"
                onClick={handeUploadIconClicked}
              />
              <EmojiComComp
                textAreaValueState={textAreaValueState}
                handleTextAreaValueChange={handleTextAreaValueChange}
                filePath={filePath}
              />
              <GifRoundedIcon className="footer-icon" />
              <BarChartOutlinedIcon className="footer-icon" />
            </div>
            <button>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapState = (state) => ({
  textAreaValueState: state.appStore.createPostTextAreaValue,
});
const mapDispatch = (dispatch) => ({
  handleTextAreaValueChange: (value) => dispatch(createPostTextArea(value)),
});
export default connect(mapState, mapDispatch)(CreatePost);
