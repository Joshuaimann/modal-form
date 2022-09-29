import UserList from "./components/UserList/UserList";

const listOfUsers = [
  {
    name: "Max",
    age: 25,
  },
  {
    name: "Sam",
    age: 26,
  },
  {
    name: "John",
    age: 27,
  },
  {
    name: "Bill",
    age: 28,
  },
  {
    name: "Reggie",
    age: 29,
  },
];

const App = () => {
  
  return (
    <>
      <UserList list={listOfUsers}/>
    </>
  );
}

export default App;
