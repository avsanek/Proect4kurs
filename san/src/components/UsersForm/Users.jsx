import React from "react";
import s from "./Users.module.css";

const Users = props => {
  let textUnit = React.createRef();
  let textUnit1 = React.createRef();
  let textUnit2 = React.createRef();

  let onTextChange = () => {
    debugger;
    let text = textUnit.current.value;
    let text1 = textUnit1.current.value;
    let text2 = textUnit2.current.value;
    props.UserTextUpdate(text, text1, text2);
  };

  let onAddUser = e => {
    e.preventDefault();
    props.AddUser();
  };

  let onRemoveUser = id => {
    props.RemoveUser(id);
  };

  let messagesElements = props.usersData.map((el, i) => {
    return (
      <tr key={i}>
        <td>{el.name}</td>
        <td>{el.lastName}</td>
        <td>{el.email}</td>
        <td>
         
            <button onClick={() => onRemoveUser(el.id)}>Remove</button>
          
        </td>
      </tr>
    );
  });

  return (
    <div>
      <form>
        <div className={s.container}>
          <label> Name </label>

          <textarea
            onChange={onTextChange}
            ref={textUnit}
            value={props.newText}
          />

          <label> LastName </label>

          <textarea
            onChange={onTextChange}
            ref={textUnit1}
            value={props.newText1}
          />

          <label> Email </label>

          <textarea
            onChange={onTextChange}
            ref={textUnit2}
            value={props.newText2}
          />
        </div>
        <div className={s.container3}>
          <button onClick={onAddUser}>Add User</button>
        </div>
      </form>

      <table>
        <thead>
          <div className={s.container4}>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </div>
        </thead>
        <div className={s.container5}>
          <tbody>{messagesElements}</tbody>
        </div>
      </table>
    </div>
  );
};
export default Users;
