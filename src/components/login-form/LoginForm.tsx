import {Button} from '@material-ui/core';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import * as React from 'react';

export interface FormData {
  username: string;
  password: string;
}

interface Props {
  onSubmit: (data: FormData) => Promise<any>;
}

export default function SignupForm(props: Props) {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={props.onSubmit}
    >
      <Form>
        <Field
          name="username"
          component={TextField}
          label="Username"
          fullWidth
          margin="normal"
          variant="outlined"
          validate={(value: string) => !value && 'Please, enter a username'}
        />
        <Field
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          component={TextField}
          label="Password"
          type="password"
          validate={(value: string) => !value && 'You will need a password to log in'}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
