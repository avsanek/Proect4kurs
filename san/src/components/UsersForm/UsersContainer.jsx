import {
  UserTextUpdateCreatorAction,
  AddUserCreatorAction,
  RemoveUserCreatorAction
} from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";
let mapStateToProps = state => {
  return {
    usersData: state.usersPage.usersData,
    newText: state.usersPage.newText,
    newText1: state.usersPage.newText1,
    newText2: state.usersPage.newText2
  };
};
let mapDispatchToProps = dispatch => {
  return {
    RemoveUser: id => {
      dispatch(RemoveUserCreatorAction(id));
    },
    AddUser: () => {
      dispatch(AddUserCreatorAction());
      dispatch(UserTextUpdateCreatorAction("", "", ""));
    },
    UserTextUpdate: (text, text1, text2) => {
      dispatch(UserTextUpdateCreatorAction(text, text1, text2));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
