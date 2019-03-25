// @flow
type UiStateType = {};

type ActionType = {
  type: string,
  payload: any
};

const initialState = {};

const uiStateReducer = (
  state: UiStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default uiStateReducer;
