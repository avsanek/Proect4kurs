export const UPDATE_NEW_LOGIN_TEXT = "UPDATE-NEW-LOGIN-TEXT";
let initialState = {
  name: "",
  password: ""
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_LOGIN_TEXT:
      debugger;
      return {
        ...state,
        name: action.NewNameText,
        password: action.NewPassText
      };

    default:
      return state;
  }
};
export const NamePassUpdateCreatorAction = (nameText, passText) => ({
         type: UPDATE_NEW_LOGIN_TEXT,
         NewNameText: nameText,
         NewPassText: passText
       });

export default loginReducer;
