import styled from "styled-components";

interface values {
  name: string;
  age: number;
}

const UserWrap = styled.div`
  border: 1px solid gray;
  color: black;
  padding: 10px;
  margin: 10px;
  width: auto;
  box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;

const User = (props: values) => {
  const { name, age } = props;
  return <UserWrap>{`${name} (${age} years old)`}</UserWrap>;
};

export default User;
