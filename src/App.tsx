import UserList from "./components/UserList/UserList";
import UserForm from "./components/form/UserForm";

import { useState } from "react";



const App = () => {
  const [userList, setUserList] = useState([{}]);

  const addUser = (newAdd: any) => {
    if (newAdd) {
      if (userList.length == 0) {
        setUserList(newAdd);
      } else {
        setUserList(() => {
          const updatedList = [...userList];
          updatedList.unshift(newAdd);
          return updatedList;
        });
      }
    }
  };

  return (
    <>
      <UserForm addFunction={addUser} />
      <UserList list={userList} />
    </>
  );
};

export default App;
