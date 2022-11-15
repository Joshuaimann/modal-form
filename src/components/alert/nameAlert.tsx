import styled from "styled-components";

const Top = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: none;
  border: 1px solid black;
  border-radius: 25px 25px 0 0;
  justify-content: start;
  align-item: center;
  background-color: purple;
  color: white;
`;

const Container = styled.div`
  height: 20%;
  margin: 50px 0px 50px 0px;
  display: flex;
  border-radius: 25px;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 25px 25px;
  justify-content: center;
  align-item: center;
  background-color: white;
  color: black;
  padding: 50px;
`;

const Button = styled.button`
  color: white;
  border: 1px solid black;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: purple;
  padding: 10px;
  width: 15%;
`;

const NameAlert = (props: any) => {
  return (
    <Container>
      <Top>
        <h3> Invalid Input </h3>
      </Top>
      <Bottom>
        <> Please enter a valid name and age (non-empty values).</>
        <Button onClick={props.whenClicked}> Okay </Button>
      </Bottom>
    </Container>
  );
};

export default NameAlert;
