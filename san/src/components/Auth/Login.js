import React from "react";
import s from "./Login.module.css";

let Login = props => {
  let Unitname = React.createRef(); 
  let Unitpass = React.createRef();
  let onTextChange = () => { 
    let nameText = Unitname.current.value;
    let passText = Unitpass.current.value;
    props.NamePassUpdate(nameText, passText);
  };

  let submitLogins = event => {
    props.NamePassUpdate("", "");
    event.preventDefault();
    if (props.NewNameText === "San" && props.NewPassText === "San") {
      window.location.assign("/form");
    } else {
      alert("Неправильный пароль или логин!!");
    }
  };

  return (
    <div className={s.container4}>
      <div>
        <form>
          <div></div>

          <div className={s.container2}>
            <label for="login">UserName:</label>
            <input
              name="login"
              id="login"
              placeholder="Логин"
              type="text"
              value={props.NewNameText}
              onChange={onTextChange}
              ref={Unitname}
            />
          </div>
          <div className={s.container}>
            <label for="password">Password: </label>
            <input
              name="password"
              id="password"
              placeholder="Пароль"
              type="password"
              value={props.NewPassText}
              onChange={onTextChange}
              ref={Unitpass}
            />
          </div>
          <div className={s.container3}>
            <button type="submit" onClick={submitLogins}>
              Вход
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
