import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  const validateSchema = yup.object({
    name: yup
      .string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
    number: yup
      .string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" style={{ color: 'red' }} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
