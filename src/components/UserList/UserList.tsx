import User from "../User/User";
import styled from "styled-components";

const ListWrap = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`;

const UserList = (props: any) => {
  return (
    <ListWrap>
      {props.list.map((info: any) => {
          return <User name={info.name} age={info.age} key={ Math.random()} />;
      })}
    </ListWrap>
  );
};

export default UserList;
