import UserList from "./components/UserList/UserList";
import Form from "./components/form/UserForm";
import { useState } from "react";

const listOfUsers = [{}];



const App = () => {
  const [userList, setUserList] = useState(listOfUsers)
  const addUser = (newAdd: any) => {
    if (newAdd) {
      setUserList((prevList) => {
        const updatedList = [...prevList];
        updatedList.unshift(newAdd);
        return updatedList
      })
    }
  };
  return (
    <>
      <Form addFunction={addUser} />
      <UserList list={userList} />
    </>
  );
}

export default App;
