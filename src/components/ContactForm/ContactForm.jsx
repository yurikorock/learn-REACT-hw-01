import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

export default function ContactForm() {

  const nameFieldId = useId();
  const numberFieldId = useId();
  
  return (
    <Formik>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
