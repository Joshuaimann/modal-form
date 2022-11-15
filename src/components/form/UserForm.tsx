import { Formik, Field, Form } from "formik";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import AgeAlert from "../alert/ageAlert";
import NameAlert from "../alert/nameAlert";
import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2 em;
`;

const FormWrap = styled.div`
  margin: 50px 0 50px 0;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  border-radius: 20px;
`;
const SubmitButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 1em;
  width: 20%;
  height: 2em;
  background-color: purple;
  border: 1px solid black;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Alert = styled.div`
  position: absolute;
  top: 30%;
  left: 38%;
  transform: "translate(-50%, -50%)";
  width: 25%;
`;

interface formValues {
  name: string;
  age: number;
}

const UserForm = (props: any) => {
  const [open, setOpen] = useState(false);

  const popUpClose = () => {
    handleClose();
  };

  const [theComponent, settingTheComponent] = useState(
    <NameAlert whenClicked={popUpClose} />
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Formik initialValues={{} as formValues} onSubmit={() => {}}>
        {({ values, setFieldValue }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              if ( !values.name || values.name.trim().length == 0 || !values.age) {
                settingTheComponent(<NameAlert whenClicked={ popUpClose} />)
                handleOpen()
              } else if (+values.age < 0) {
                settingTheComponent(<AgeAlert whenClicked={popUpClose} />);
                handleOpen();
              } else {
                handleClose()
                const newValue = {
                  name: values.name,
                  age: values.age,
                };
                props.addFunction(newValue);
                setFieldValue("name", '');
                setFieldValue("age", 0);
              }
            }}
          >
            <FormWrap>
              <Label> Username </Label>
              <Field
                fullwidth="true"
                variant="outlined"
                value={values.name || ""}
                name="name"
                type="text"
                onChange={(e: any) => {
                  setFieldValue("name", e.target.value);
                }}
              />

              <Label> Age </Label>
              <Field
                fullwidth="true"
                variant="outlined"
                value={values.age || ""}
                name="age"
                type="number"
                onChange={(e: any) => {
                  setFieldValue("age", e.target.value);
                }}
              />

              <SubmitButton type="submit">Add User</SubmitButton>
            </FormWrap>
          </Form>
        )}
      </Formik>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Alert>{theComponent}</Alert>
      </Modal>
    </>
  );
};

export default UserForm;
