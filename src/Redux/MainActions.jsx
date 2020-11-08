export const ACTIONS = {
  INPUT_CHANGE: {
    CREATE_POST_TEXT_AREA_CHANGE: "CREATE_POST_TEXT_AREA_CHANGE",
  },
};

export const createPostTextArea = (value) => ({
  type: ACTIONS.INPUT_CHANGE.CREATE_POST_TEXT_AREA_CHANGE,
  payload: value,
});
