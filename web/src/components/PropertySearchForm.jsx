import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  keyword: Yup.string().required('please enter search keyword'),
});

function PropertySearchForm({ onSearch }) {
  return (
    <div>
      <Formik initialValues={{ keyword: '' }} validationSchema={FormSchema} onSubmit={onSearch}>
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field type="text" name="keyword" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
            {errors.keyword && touched.keyword ? <div>{errors.keyword}</div> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PropertySearchForm;
