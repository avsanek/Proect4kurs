import { NamePassUpdateCreatorAction } from "../../redux/login-reducer";
import Login from "./Login";
import { connect } from "react-redux";
let mapStateToProps = state => {
  return {
    NewNameText: state.loginPage.name,
    NewPassText: state.loginPage.password
  };
};
let mapDispatchToProps = dispatch => {
  return {
    NamePassUpdate: (nameText, passText) => {
      dispatch(NamePassUpdateCreatorAction(nameText, passText));
    }
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
