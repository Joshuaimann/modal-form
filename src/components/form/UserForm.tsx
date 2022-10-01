import { Formik, Field, Form } from "formik";
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

interface formValues {
  name: string;
  age: number;
}

const UserForm = (props: any) => {
  return (
    <Formik initialValues={{} as formValues} onSubmit={() => {}}>
      {({ values, setFieldValue }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(values);
            const newValue = {
              name: values.name,
              age: values.age,
            };
            props.addFunction(newValue);
          }}
        >
          <FormWrap>
            <Label> Username </Label>
            <Field
              fullwidth="true"
              variant="outlined"
              value={values.name || ''}
              name="name"
              type="text"
              onBlur={(e: any) => {
                setFieldValue("name", e.target.value);
              }}
            />

            <Label> Age </Label>
            <Field
              fullwidth="true"
              variant="outlined"
              value={values.age || ''}
              name="age"
              type="number"
              onBlur={(e: any) => {
                setFieldValue("age", e.target.value);
              }}
            />

            <SubmitButton type="submit">Add User</SubmitButton>
          </FormWrap>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
